import axios from 'axios';
import * as ApiConf from '../../shared/constants/ApiConf';


// import {getHeaders, objToQueryString} from "../_helper/apiHelper";

class authApi {
  static readAuthList() {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/api/auth`)
      .then(response => (response))
      .catch(error => (error));
  }

  static readAuth(id) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/api/auth/${id}`)
      .then(response => (response))
      .catch(error => (error));
  }

  static createJwt(data) {
    return axios.post(`${ApiConf.API_SERVER_ADDRESS}/api/auth`, data)
      .then(response => (response))
      .catch(error => (error));
  }

  static deleteAuth(key) {
    return axios.delete(`${ApiConf.API_SERVER_ADDRESS}/api/auth/${key}`)
      .then(response => (response))
      .catch(error => (error));
  }
}
export default authApi;
