import axios from 'axios';
import * as ApiConf from '../../shared/constants/ApiConf';


// import {getHeaders, objToQueryString} from "../_helper/apiHelper";

class PersonApi {
  static readPersonList() {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/persons`)
      .then(response => (response))
      .catch(error => (error));
  }

  static readPerson(id) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/persons/${id}`)
      .then(response => (response))
      .catch(error => (error));
  }

  static createPerson(data) {
    return axios.post(`${ApiConf.API_SERVER_ADDRESS}/persons`, data)
      .then(response => (response))
      .catch(error => (error));
  }

  static deletePerson(key) {
    return axios.delete(`${ApiConf.API_SERVER_ADDRESS}/persons/${key}`)
      .then(response => (response))
      .catch(error => (error));
  }
}

export default PersonApi;
