import axios from "axios";

// const API_URL = "http://localhost:8081/api/auth";
const API_URL = "http://52.91.104.43/api/auth";
class AuthService {
  login(user) {
    return axios
      .post(API_URL + "/signin", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "/signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }

  recoveryPassword(email) {
    return axios.post(API_URL + "/recovery-password", {
      params: {
        email: email,
      },
    });
  }
}

export default new AuthService();
