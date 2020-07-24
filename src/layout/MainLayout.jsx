import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { Container, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import Loading from "../Components/Loading/Loading";
import ENDPOINTS from "../api/endpoints";
import Footer from "../Components/Footer/Footer";
import Chat from "../Components/Chat/Chat";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      loading: false,
      error: false,
    };
  }
  componentDidMount() {
    this.fetchActiveUser();
  }
  fetchActiveUser = async () => {
    this.setState({ loading: true });
    const Authorization = localStorage.getItem("authorization");
    if (!Authorization) {
      this.props.history.push("/login");
    } else {
      let res = await fetch(ENDPOINTS.USERS + "/me", {
        headers: {
          Authorization,
        },
      });
      if (res.ok) {
        const { data } = await res.json();

        this.setState({ loading: false, user: data });
      } else {
        this.props.history.push("/login");
        const error = await res.json();
        console.log(error);
        this.setState({ loading: false });
      }
    }
  };
  render() {
    const { loading, error, user } = this.state;
    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <>
            <NavBar user={user} />
            <Container style={{ paddingTop: 100 }}>
              {React.cloneElement(this.props.children, {
                user,
                reFetch: () => this.fetchActiveUser(),
              })}
            </Container>
            {/* <Chat />*/}
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default withRouter(MainLayout);
