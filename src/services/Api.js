
import Axios from "axios";

const Api = () => {
  
 
};

const API_ROOT = "https://api.gar.ovh";

let token = null;
const tokenPlugin = (req) => {
  if (token) {
    req.set("authorization", `Token ${token}`);
  }
};

const Auth = {
  post: (login, password) =>
    Axios.post(`${API_ROOT}/auth/local`, {
      identifier: login,
      password: password,
    }),
};

export default {
  Auth
};
