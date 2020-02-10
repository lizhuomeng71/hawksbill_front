import { push } from 'react-router-redux';

import authApi from '../apis/authApi';
import * as HttpStatus from '../../shared/constants/HttpStatus';

export const READ_AUTH_LIST_BEGIN = 'READ_AUTH_LIST_BEGIN';
export const READ_AUTH_LIST_SUCCESS = 'READ_AUTH_LIST_SUCCESS';
export const READ_AUTH_LIST_FAIL = 'READ_AUTH_LIST_FAIL';
export const READ_AUTH_BEGIN = 'READ_AUTH_BEGIN';
export const READ_AUTH_SUCCESS = 'READ_AUTH_SUCCESS';
export const READ_AUTH_FAIL = 'READ_AUTH_FAIL';
export const CREATE_AUTH_BEGIN = 'CREATE_AUTH_BEGIN';
export const CREATE_AUTH_SUCCESS = 'CREATE_AUTH_SUCCESS';
export const CREATE_AUTH_FAIL = 'CREATE_AUTH_FAIL';
export const DELETE_AUTH_BEGIN = 'DELETE_AUTH_BEGIN';
export const DELETE_AUTH_SUCCESS = 'DELETE_AUTH_SUCCESS';
export const DELETE_AUTH_FAIL = 'DELETE_AUTH_FAIL';

/* Read Auth List Start */
function readAuthListBegin() {
  return { type: READ_AUTH_LIST_BEGIN };
}

function readAuthListSuccess(data) {
  return { type: READ_AUTH_LIST_SUCCESS, payload: data };
}

function readAuthListFail(data) {
  return { type: READ_AUTH_LIST_FAIL, payload: data };
}

export function readAuthList() {
  return (dispatch) => {
    dispatch(readAuthListBegin());
    return authApi.readAuthList().then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readAuthListSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readAuthListFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read Auth List End */

/* Read Auth Start */
function readAuthBegin() {
  return { type: READ_AUTH_BEGIN };
}

function readAuthSuccess(data) {
  return { type: READ_AUTH_SUCCESS, payload: data };
}

function readAuthFail(data) {
  return { type: READ_AUTH_FAIL, payload: data };
}

export function readAuth(id) {
  return (dispatch) => {
    dispatch(readAuthBegin());
    return authApi.readAuth(id).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readAuthSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readAuthFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}

/* Read Auth List End */

/* Add Auth Start */
function createJwtBegin() {
  return { type: CREATE_AUTH_BEGIN };
}

function createJwtSuccess(data) {
  return { type: CREATE_AUTH_SUCCESS, payload: data };
}

function createJwtFail(data) {
  return { type: CREATE_AUTH_FAIL, payload: data };
}

export function createJwt(data) {
  return (dispatch) => {
    dispatch(createJwtBegin());
    return authApi.createJwt(data).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(createJwtSuccess(response.data));
          dispatch(push('/dashboard/'));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(createJwtFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add Auth End */

/* Delete Auth List Start */
function deleteAuthBegin() {
  return { type: DELETE_AUTH_BEGIN };
}

function deleteAuthSuccess(data) {
  return { type: DELETE_AUTH_SUCCESS, payload: data };
}

function deleteAuthFail(data) {
  return { type: DELETE_AUTH_FAIL, payload: data };
}

export function deleteAuth(key) {
  return (dispatch) => {
    dispatch(deleteAuthBegin());
    return authApi.deleteAuth(key).then((response) => {
      switch (response.status) {
        case HttpStatus.NO_CONTENT:
          dispatch(deleteAuthSuccess(key));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(deleteAuthFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}

/* Delete Auth List End */
