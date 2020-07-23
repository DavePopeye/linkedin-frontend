const ENDPOINTS = {
  USERS:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com/users`
      : `http://localhost:3001/users`,
  EXPERIENCES:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com/experiences`
      : `https://linkedinbackend.herokuapp.com/experiences`,
  POSTS:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com/posts`
      : `https://linkedinbackend.herokuapp.com/posts`,
  CERTIFICATIONS:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com/certifications`
      : `http://localhost:3001/certifications`,
  SOCKET:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com`
      : `https://linkedinbackend.herokuapp.com`,
};

export default ENDPOINTS;
