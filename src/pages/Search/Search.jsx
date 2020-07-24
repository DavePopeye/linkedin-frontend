import React from "react";
import ENDPOINTS from "../../api/endpoints";
import Loading from "../../Components/Loading/Loading";
import Paper from "../../Components/ui/Paper/Paper";
import { Row, Col, Image, Button } from "react-bootstrap";
import "./Search.css"
import {Link} from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      results: [],
    };
  }
  componentDidMount() {
    this.fetchUsers();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.query !== this.props.match.params.query) {
      this.fetchUsers();
    }
  }

  fetchUsers = async () => {
    this.setState({ loading: true });
    const { query } = this.props.match.params;
    const Authorization = localStorage.getItem("authorization");
    let response = await fetch(ENDPOINTS.USERS + "/search/" + query, {
      method: "GET",
      headers: new Headers({
        Authorization,
        "Content-type": "application/json",
      }),
    });
    let parsedJson = await response.json();
    this.setState({ results: parsedJson.data, loading: false });
  };
  render() {
    const { loading, results } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <Paper>
            <div>Showing {results.length} results</div>
            {results.map((user) => (
                <Row className='my-3'>
                  <Col className='col-1 py-2'>
                  {user.image ? <Image src={`${user.image}`} style={{width:'100%'}} alt={`${user.image}'s image`} roundedCircle 
                  onError={(e)=>{e.target.onerror = null; e.target.src=`https://api.adorable.io/avatars/${user.name}`}}/>
                 :
                 <Image  src={`https://api.adorable.io/avatars/${user.name}`}  style={{width: '100%'}} alt={`${user.image}'s image`} roundedCircle />
                 }
                  </Col>
                  <Col className='col-11 d-flex justify-content-between align-items-center' style={{borderBottom:'1px solid #dbdbdb'}}>
                    <div className='mb-3'>
                      <Link className='name' to={`/users/${user._id}`}>{user.name} {user.lastName}</Link>
                      <div className='work'>{user.experiences[0].role} at {user.experiences[0].company}</div>
                      <div className='area'>{user.experiences[0].area}</div>
                    </div>
                    <div>
                      <Button className='button' variant="outline-primary">Connect</Button>
                    </div>

                  </Col>
                </Row>
              ))}
          </Paper>
        )}
      </div>
    );
  }
}

export default Search;
