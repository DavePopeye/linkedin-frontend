import React from "react";
import ENDPOINTS from "../../api/endpoints";
import Loading from "../../Components/Loading/Loading";
import Paper from "../../Components/ui/Paper/Paper";
import { Row, Col, Image, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';


class Coments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      post: [],
    };
  }
//   componentDidMount() {
//     this.fetchUsers();
//   }
// //   componentDidUpdate(prevProps, prevState, snapshot) {
// //     if (prevProps.match.params.query !== this.props.match.params.query) {
// //       this.fetchUsers();
// //     }
// //   }

//   fetchUsers = async () => {
//     this.setState({ loading: true });
//     const Authorization = localStorage.getItem("authorization");
//     let response = await fetch(ENDPOINTS.POSTS+`/${this.props.post._id}`, {
//       method: "GET",
//       headers: new Headers({
//         Authorization,
//         "Content-type": "application/json",
//       }),
//     });
//     let parsedJson = await response.json();
//     this.setState({ post: parsedJson.data, loading: false });
//   };

  render() {
    const { loading, post } = this.state;
    const comments = this.props;
    console.log("COMENTS",comments.comments)
    return (
        <>
            <Row>new comment</Row>
            <div style={{ maxHeight: 400, overflowY: "scroll" }}>
            {/* {comments.comment.map(function (data, i) {
              return (
                <p>some text</p>
              )       
            })} */}
            </div>
        </>
    );
  };
}

export default Coments;
