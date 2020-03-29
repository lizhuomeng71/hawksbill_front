import { push } from 'react-router-redux';

import reviewApi from '../apis/reviewApi';
import * as HttpStatus from '../../shared/constants/HttpStatus';

export const READ_REVIEW_LIST_BEGIN = 'READ_REVIEW_LIST_BEGIN';
export const READ_REVIEW_LIST_SUCCESS = 'READ_REVIEW_LIST_SUCCESS';
export const READ_REVIEW_LIST_FAIL = 'READ_REVIEW_LIST_FAIL';
export const READ_REVIEW_BEGIN = 'READ_REVIEW_BEGIN';
export const READ_REVIEW_SUCCESS = 'READ_REVIEW_SUCCESS';
export const READ_REVIEW_FAIL = 'READ_REVIEW_FAIL';
export const READ_REVIEW_SUBREVIEW_LIST_BEGIN = 'READ_REVIEW_SUBREVIEW_LIST_BEGIN';
export const READ_REVIEW_SUBREVIEW_LIST_SUCCESS = 'READ_REVIEW_SUBREVIEW_LIST_SUCCESS';
export const READ_REVIEW_SUBREVIEW_LIST_FAIL = 'READ_REVIEW_SUBREVIEW_LIST_FAIL';
export const CREATE_REVIEW_BEGIN = 'CREATE_REVIEW_BEGIN';
export const CREATE_REVIEW_SUCCESS = 'CREATE_REVIEW_SUCCESS';
export const CREATE_REVIEW_FAIL = 'CREATE_REVIEW_FAIL';
export const DELETE_REVIEW_BEGIN = 'DELETE_REVIEW_BEGIN';
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS';
export const DELETE_REVIEW_FAIL = 'DELETE_REVIEW_FAIL';
export const CHANGE_REVIEW_PAGE_STATE = 'CHANGE_REVIEW_PAGE_STATE';


/* Read Review List Start */
function readReviewListBegin() {
  return { type: READ_REVIEW_LIST_BEGIN };
}

function readReviewListSuccess(data) {
  return { type: READ_REVIEW_LIST_SUCCESS, payload: data };
}

function readReviewListFail(data) {
  return { type: READ_REVIEW_LIST_FAIL, payload: data };
}

export function readReviewList(parentTaskId) {
  return (dispatch) => {
    dispatch(readReviewListBegin());
    return reviewApi.readReviewList({ parent_task: parentTaskId }).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readReviewListSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readReviewListFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read Review List End */

/* Read Review Start */
function readReviewBegin() {
  return { type: READ_REVIEW_BEGIN };
}

function readReviewSuccess(data) {
  return { type: READ_REVIEW_SUCCESS, payload: data };
}

function readReviewFail(data) {
  return { type: READ_REVIEW_FAIL, payload: data };
}

export function readReview(id) {
  return (dispatch) => {
    dispatch(readReviewBegin());
    return reviewApi.readReview(id).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readReviewSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readReviewFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}

/* Read Review List End */


/* Read Review Sub Review Start */
function readReviewSubReviewListBegin() {
  return { type: READ_REVIEW_SUBREVIEW_LIST_BEGIN };
}

function readReviewSubReviewListSuccess(data) {
  return { type: READ_REVIEW_SUBREVIEW_LIST_SUCCESS, payload: data };
}

function readReviewSubReviewListFail(data) {
  return { type: READ_REVIEW_SUBREVIEW_LIST_FAIL, payload: data };
}

export function readReviewSubReviewList(id) {
  return (dispatch) => {
    dispatch(readReviewSubReviewListBegin());
    return reviewApi.readReviewSubReviewList(id).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readReviewSubReviewListSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readReviewSubReviewListFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}

/* Read Review Sub Review End */

/* Add Review Start */
function createReviewBegin() {
  return { type: CREATE_REVIEW_BEGIN };
}

function createReviewSuccess(data) {
  return { type: CREATE_REVIEW_SUCCESS, payload: data };
}

function createReviewFail(data) {
  return { type: CREATE_REVIEW_FAIL, payload: data };
}

export function createReview(data) {
  console.log(data);
  return (dispatch) => {
    dispatch(createReviewBegin());
    return reviewApi.createReview(data).then((response) => {
      switch (response.status) {
        case HttpStatus.CREATED:
          dispatch(createReviewSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(createReviewFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add Review End */

/* Delete Review List Start */
function deleteReviewBegin() {
  return { type: DELETE_REVIEW_BEGIN };
}

function deleteReviewSuccess(data) {
  return { type: DELETE_REVIEW_SUCCESS, payload: data };
}

function deleteReviewFail(data) {
  return { type: DELETE_REVIEW_FAIL, payload: data };
}

export function deleteReview(key) {
  return (dispatch) => {
    dispatch(deleteReviewBegin());
    return reviewApi.deleteReview(key).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(deleteReviewSuccess(key));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(deleteReviewFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}

/* Delete Review List End */

export function changeReviewPageState(data) {
  return { type: CHANGE_REVIEW_PAGE_STATE, payload: data };
}
