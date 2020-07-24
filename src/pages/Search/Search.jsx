import React from "react";
import ENDPOINTS from "../../api/endpoints";
import Loading from "../../Components/Loading/Loading";

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
          <div>
            {results.map((user) => (
              <div>{user.name}</div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Search;
