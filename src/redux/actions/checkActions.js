import { push } from 'react-router-redux';

import checkApi from '../apis/checkApi';
import * as HttpStatus from '../../shared/constants/HttpStatus';

export const READ_CHECK_LIST_BEGIN = 'READ_CHECK_LIST_BEGIN';
export const READ_CHECK_LIST_SUCCESS = 'READ_CHECK_LIST_SUCCESS';
export const READ_CHECK_LIST_FAIL = 'READ_CHECK_LIST_FAIL';
export const READ_CHECK_BEGIN = 'READ_CHECK_BEGIN';
export const READ_CHECK_SUCCESS = 'READ_CHECK_SUCCESS';
export const READ_CHECK_FAIL = 'READ_CHECK_FAIL';
export const READ_CHECK_SUBCHECK_LIST_BEGIN = 'READ_CHECK_SUBCHECK_LIST_BEGIN';
export const READ_CHECK_SUBCHECK_LIST_SUCCESS = 'READ_CHECK_SUBCHECK_LIST_SUCCESS';
export const READ_CHECK_SUBCHECK_LIST_FAIL = 'READ_CHECK_SUBCHECK_LIST_FAIL';
export const CREATE_CHECK_BEGIN = 'CREATE_CHECK_BEGIN';
export const CREATE_CHECK_SUCCESS = 'CREATE_CHECK_SUCCESS';
export const CREATE_CHECK_FAIL = 'CREATE_CHECK_FAIL';
export const DELETE_CHECK_BEGIN = 'DELETE_CHECK_BEGIN';
export const DELETE_CHECK_SUCCESS = 'DELETE_CHECK_SUCCESS';
export const DELETE_CHECK_FAIL = 'DELETE_CHECK_FAIL';
export const CHANGE_CHECK_PAGE_STATE = 'CHANGE_CHECK_PAGE_STATE';


/* Read Check List Start */
function readCheckListBegin() {
  return { type: READ_CHECK_LIST_BEGIN };
}

function readCheckListSuccess(data) {
  return { type: READ_CHECK_LIST_SUCCESS, payload: data };
}

function readCheckListFail(data) {
  return { type: READ_CHECK_LIST_FAIL, payload: data };
}

export function readCheckList(parentTaskId) {
  return (dispatch) => {
    dispatch(readCheckListBegin());
    return checkApi.readCheckList({ parent_task: parentTaskId }).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readCheckListSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readCheckListFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read Check List End */

/* Read Check Start */
function readCheckBegin() {
  return { type: READ_CHECK_BEGIN };
}

function readCheckSuccess(data) {
  return { type: READ_CHECK_SUCCESS, payload: data };
}

function readCheckFail(data) {
  return { type: READ_CHECK_FAIL, payload: data };
}

export function readCheck(id) {
  return (dispatch) => {
    dispatch(readCheckBegin());
    return checkApi.readCheck(id).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readCheckSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readCheckFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}

/* Read Check List End */


/* Read Check Sub Check Start */
function readCheckSubCheckListBegin() {
  return { type: READ_CHECK_SUBCHECK_LIST_BEGIN };
}

function readCheckSubCheckListSuccess(data) {
  return { type: READ_CHECK_SUBCHECK_LIST_SUCCESS, payload: data };
}

function readCheckSubCheckListFail(data) {
  return { type: READ_CHECK_SUBCHECK_LIST_FAIL, payload: data };
}

export function readCheckSubCheckList(id) {
  return (dispatch) => {
    dispatch(readCheckSubCheckListBegin());
    return checkApi.readCheckSubCheckList(id).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readCheckSubCheckListSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readCheckSubCheckListFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}

/* Read Check Sub Check End */

/* Add Check Start */
function createCheckBegin() {
  return { type: CREATE_CHECK_BEGIN };
}

function createCheckSuccess(data) {
  return { type: CREATE_CHECK_SUCCESS, payload: data };
}

function createCheckFail(data) {
  return { type: CREATE_CHECK_FAIL, payload: data };
}

export function createCheck(data) {
  return (dispatch) => {
    dispatch(createCheckBegin());
    return checkApi.createCheck(data).then((response) => {
      switch (response.status) {
        case HttpStatus.CREATED:
          dispatch(createCheckSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(createCheckFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add Check End */

/* Delete Check List Start */
function deleteCheckBegin() {
  return { type: DELETE_CHECK_BEGIN };
}

function deleteCheckSuccess(data) {
  return { type: DELETE_CHECK_SUCCESS, payload: data };
}

function deleteCheckFail(data) {
  return { type: DELETE_CHECK_FAIL, payload: data };
}

export function deleteCheck(key) {
  return (dispatch) => {
    dispatch(deleteCheckBegin());
    return checkApi.deleteCheck(key).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(deleteCheckSuccess(key));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(deleteCheckFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}

/* Delete Check List End */

export function changeCheckPageState(data) {
  return { type: CHANGE_CHECK_PAGE_STATE, payload: data };
}
