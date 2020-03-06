import axios from 'axios';
import * as ApiConf from '../../shared/constants/ApiConf';


// import {getHeaders, objToQueryString} from "../_helper/apiHelper";

class EquipmentApi {
  static readEquipmentList() {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/equipments`)
      .then(response => (response))
      .catch(error => (error));
  }

  static readEquipment(id) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/equipments/${id}`)
      .then(response => (response))
      .catch(error => (error));
  }

  static createEquipment(data) {
    return axios.post(`${ApiConf.API_SERVER_ADDRESS}/equipments`, data)
      .then(response => (response))
      .catch(error => (error));
  }

  static deleteEquipment(key) {
    return axios.delete(`${ApiConf.API_SERVER_ADDRESS}/equipments/${key}`)
      .then(response => (response))
      .catch(error => (error));
  }
}

export default EquipmentApi;
