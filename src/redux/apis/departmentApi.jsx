import axios from 'axios';
import * as ApiConf from '../../shared/constants/ApiConf';


// import {getHeaders, objToQueryString} from "../_helper/apiHelper";

class DepartmentApi {
  static readDepartmentList() {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/departments`)
      .then(response => (response))
      .catch(error => (error));
  }

  static readDepartment(id) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/departments/${id}`)
      .then(response => (response))
      .catch(error => (error));
  }

  static createDepartment(data) {
    return axios.post(`${ApiConf.API_SERVER_ADDRESS}/departments`, data)
      .then(response => (response))
      .catch(error => (error));
  }

  static deleteDepartment(key) {
    return axios.delete(`${ApiConf.API_SERVER_ADDRESS}/departments/${key}`)
      .then(response => (response))
      .catch(error => (error));
  }
}

export default DepartmentApi;
