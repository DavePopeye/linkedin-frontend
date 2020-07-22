const ENDPOINTS = {
  USERS:
    process.env.NODE_ENV === "production"
      ? `http://linkedinbackend.herokuapp.com/users`
      : `http://linkedinbackend.herokuapp.com/users`,
  EXPERIENCES:
    process.env.NODE_ENV === "production"
      ? `http://linkedinbackend.herokuapp.com/experiences`
      : `http://linkedinbackend.herokuapp.com/experiences`,
  POSTS:
    process.env.NODE_ENV === "production"
      ? `http://linkedinbackend.herokuapp.com/posts`
      : `http://linkedinbackend.herokuapp.com/posts`,
};

export default ENDPOINTS;
