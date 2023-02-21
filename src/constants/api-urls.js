const API_KEY = "AIzaSyC2iw5DQDZHCk6V3Z3wmn1XD7YvQpq2R5Q";

const API_URLS = {
  AUTH: {
    SIGNUP_WITH_EMAIL_PASSWORD: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    LOGIN_WITH_EMAIL_PASSWORD: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
  },
};

export default API_URLS;
