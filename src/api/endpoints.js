const ENDPOINTS = {
  USERS:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com/users`
      : `https://linkedinbackend.herokuapp.com/users`,
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
      : `https://linkedinbackend.herokuapp.com/certifications`,
  MYEXPERIENCES:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com/users/me/experiences`
      : `https://linkedinbackend.herokuapp.com/users/me/experiences`,
  SOCKET:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com`
      : `https://linkedinbackend.herokuapp.com`,
};

export default ENDPOINTS;
