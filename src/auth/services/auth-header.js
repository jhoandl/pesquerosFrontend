export default function authHeader() {
  let user = localStorage.getItem("accessToken");

  if (user) {
    return { Authorization: "Bearer " + user };
  } else {
    return {};
  }
}
