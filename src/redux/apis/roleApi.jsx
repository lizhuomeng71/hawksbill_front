import axios from 'axios';
import * as ApiConf from '../../shared/constants/ApiConf';


// import {getHeaders, objToQueryString} from "../_helper/apiHelper";

class RoleApi {
  static readRoleList(departmentId) {
    let endPoint = `${ApiConf.API_SERVER_ADDRESS}/roles`;
    if (departmentId) {
      endPoint = `${endPoint}?department=${departmentId}`;
    }
    return axios.get(endPoint)
      .then(response => (response))
      .catch(error => (error));
  }

  static readRole(id) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/roles/${id}`)
      .then(response => (response))
      .catch(error => (error));
  }

  static createRole(data) {
    return axios.post(`${ApiConf.API_SERVER_ADDRESS}/roles`, data)
      .then(response => (response))
      .catch(error => (error));
  }

  static deleteRole(key) {
    return axios.delete(`${ApiConf.API_SERVER_ADDRESS}/roles/${key}`)
      .then(response => (response))
      .catch(error => (error));
  }
}

export default RoleApi;
