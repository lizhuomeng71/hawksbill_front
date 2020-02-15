import axios from 'axios';
import * as ApiConf from '../../shared/constants/ApiConf';


// import {getHeaders, objToQueryString} from "../_helper/apiHelper";

class reviewApi {
  static readReviewList(params) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/reviews`, { params })
      .then(response => (response))
      .catch(error => (error));
  }

  static readReview(id) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/reviews/${id}`)
      .then(response => (response))
      .catch(error => (error));
  }

  static readReviewSubReviewList(id) {
    return axios.get(`${ApiConf.API_SERVER_ADDRESS}/reviews/${id}/sub_review`)
      .then(response => (response))
      .catch(error => (error));
  }

  static createReview(data) {
    return axios.post(`${ApiConf.API_SERVER_ADDRESS}/reviews`, data)
      .then(response => (response))
      .catch(error => (error));
  }

  static deleteReview(key) {
    return axios.delete(`${ApiConf.API_SERVER_ADDRESS}/reviews/${key}`)
      .then(response => (response))
      .catch(error => (error));
  }
}
export default reviewApi;
