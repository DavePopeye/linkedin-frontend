import React from "react";
import MiniProfile from "../../Components/MiniProfile/MiniProfile";
import { Col, Row } from "react-bootstrap";
import NewPost from "../../Components/Posts/NewPost";
import PostItem from "../../Components/PostItem/PostItem";
import ENDPOINTS from "../../api/endpoints";
import NewPostForm from "../../Components/Posts/NewPostForm";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      posts: [],
    };
  }
  componentDidMount() {
    this.fetchPosts();
  }
  fetchPosts = async () => {
    const Authorization = await localStorage.getItem("authorization");

    this.setState({ loading: true });
    const res = await fetch(ENDPOINTS.POSTS, {
      headers: {
        Authorization,
      },
    });
    if (res.ok) {
      const { data } = await res.json();
      this.setState({ posts: data, loading: false });
    } else {
      const { message } = await res.json();
      alert(message);
      this.setState({ error: message, loading: false });
    }
  };
  render() {
    const { loading, posts, error } = this.state;
    const { user } = this.props;
    return (
      <>
        <Row>
          <Col xs={3}>
            <MiniProfile user={this.props.user} />
          </Col>
          <Col xs={7}>
            <NewPostForm reFetch={this.fetchPosts} />
            {posts.map((post) => (
              <PostItem user={user} reFetch={this.fetchPosts} post={post} />
            ))}
          </Col>
          <Col xs={2}></Col>
        </Row>
      </>
    );
  }
}

export default Feed;
