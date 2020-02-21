import axios from 'axios';
import * as ApiConf from '../../shared/constants/ApiConf';


// import {getHeaders, objToQueryString} from "../_helper/apiHelper";

class checkApi {
  static readCheckList(params) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/checks`, { params })
      .then(response => (response))
      .catch(error => (error));
  }

  static readCheck(id) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/checks/${id}`)
      .then(response => (response))
      .catch(error => (error));
  }

  static readCheckSubCheckList(id) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/checks/${id}/sub_check`)
      .then(response => (response))
      .catch(error => (error));
  }

  static createCheck(data) {
    return axios.post(`${ApiConf.API_SERVER_ADDRESS}/checks`, data)
      .then(response => (response))
      .catch(error => (error));
  }

  static deleteCheck(key) {
    return axios.delete(`${ApiConf.API_SERVER_ADDRESS}/checks/${key}`)
      .then(response => (response))
      .catch(error => (error));
  }
}
export default checkApi;
