const ENDPOINTS = {
  USERS:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com/users`
      : `https://linkedinbackend.herokuapp.com/users`,
  EXPERIENCES:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com/experiences`
      : `https://linkedinbackend.herokuapp.com/experiences`,
  EDUCATIONS:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com/educations`
      : `https://linkedinbackend.herokuapp.com/educations`,
  POSTS:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com/posts`
      : `https://linkedinbackend.herokuapp.com/posts`,
  CERTIFICATIONS:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com/certifications`
      : `https://linkedinbackend.herokuapp.com/certifications`,
  SOCKET:
    process.env.NODE_ENV === "production"
      ? `https://linkedinbackend.herokuapp.com`
      : `https://linkedinbackend.herokuapp.com`,
};

export default ENDPOINTS;
