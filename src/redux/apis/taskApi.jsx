import axios from 'axios';
import * as ApiConf from '../../shared/constants/ApiConf';


// import {getHeaders, objToQueryString} from "../_helper/apiHelper";

class taskApi {
  static readTaskList() {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/tasks`)
      .then(response => (response))
      .catch(error => (error));
  }

  static readTask(id) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/tasks/${id}`)
      .then(response => (response))
      .catch(error => (error));
  }

  static readTaskSubTaskList(id) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/tasks/${id}/sub_task`)
      .then(response => (response))
      .catch(error => (error));
  }

  static createTask(data) {
    return axios.post(`${ApiConf.API_SERVER_ADDRESS}/tasks`, data)
      .then(response => (response))
      .catch(error => (error));
  }

  static deleteTask(key) {
    return axios.delete(`${ApiConf.API_SERVER_ADDRESS}/tasks/${key}`)
      .then(response => (response))
      .catch(error => (error));
  }
}
export default taskApi;
