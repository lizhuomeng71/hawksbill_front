import axios from 'axios';
import * as ApiConf from '../../shared/constants/ApiConf';


// import {getHeaders, objToQueryString} from "../_helper/apiHelper";

class MaterialApi {
  static readMaterialList() {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/materials`)
      .then(response => (response))
      .catch(error => (error));
  }

  static readMaterial(id) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/materials/${id}`)
      .then(response => (response))
      .catch(error => (error));
  }

  static createMaterial(data) {
    return axios.post(`${ApiConf.API_SERVER_ADDRESS}/materials`, data)
      .then(response => (response))
      .catch(error => (error));
  }

  static deleteMaterial(key) {
    return axios.delete(`${ApiConf.API_SERVER_ADDRESS}/materials/${key}`)
      .then(response => (response))
      .catch(error => (error));
  }
}

export default MaterialApi;
