import React from "react";
import MiniProfile from "../../Components/MiniProfile/MiniProfile";
import { Col, Row } from "react-bootstrap";
import PostItem from "../../Components/PostItem/PostItem";
import ENDPOINTS from "../../api/endpoints";
import NewPostForm from "../../Components/Posts/NewPostForm";
import getScrollPercent from "../../utils/scroll";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      posts: [],
      limit: 10,
    };
  }
  componentDidMount() {
    this.fetchPosts();
    const { limit } = this.state;
    const that = this;
    window.addEventListener("scroll", () => {
      let percent = getScrollPercent();
      if (percent > 75) {
        that.setState({ limit: limit + 10 });
        this.fetchPosts();
      }
    });
  }
  fetchPosts = async () => {
    const Authorization = await localStorage.getItem("authorization");
    const { limit } = this.state;
    this.setState({ loading: true });
    const res = await fetch(`${ENDPOINTS.POSTS}?limit=${limit}`, {
      headers: {
        Authorization,
      },
    });
    if (res.ok) {
      const { data } = await res.json();
      console.log(data);
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
          <Col xs={12} md={3} lg={3}>
            <MiniProfile user={this.props.user} />
          </Col>
          <Col xs={12} md={7} lg={7}>
            <NewPostForm reFetch={this.fetchPosts} />
            {posts.map((post) => (
              <PostItem user={user} reFetch={this.fetchPosts} post={post} />
            ))}
          </Col>
          <Col xs={12} md={2} lg={2}></Col>
        </Row>
      </>
    );
  }
}

export default Feed;
