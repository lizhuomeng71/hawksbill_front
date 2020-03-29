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
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/tasks/${id}/sub_tasks`)
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

  static createTaskEquipment(data) {
    return axios.post(`${ApiConf.API_SERVER_ADDRESS}/tasks/${data.taskId}/equipments`, data)
      .then(response => (response))
      .catch(error => (error));
  }

  static deleteTaskEquipment(taskId, equipmentId) {
    return axios.delete(`${ApiConf.API_SERVER_ADDRESS}/tasks/${taskId}/equipments/${equipmentId}`)
      .then(response => (response))
      .catch(error => (error));
  }

  static createTaskMaterial(data) {
    return axios.post(`${ApiConf.API_SERVER_ADDRESS}/tasks/${data.taskId}/materials`, data)
      .then(response => (response))
      .catch(error => (error));
  }

  static deleteTaskMaterial(taskId, materialId) {
    return axios.delete(`${ApiConf.API_SERVER_ADDRESS}/tasks/${taskId}/materials/${materialId}`)
      .then(response => (response))
      .catch(error => (error));
  }
}
export default taskApi;
