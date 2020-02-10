import { push } from 'react-router-redux';

import roleApi from '../apis/roleApi';
import * as HttpStatus from '../../shared/constants/HttpStatus';

export const READ_ROLE_LIST_BEGIN = 'READ_ROLE_LIST_BEGIN';
export const READ_ROLE_LIST_SUCCESS = 'READ_ROLE_LIST_SUCCESS';
export const READ_ROLE_LIST_FAIL = 'READ_ROLE_LIST_FAIL';
export const READ_ROLE_BEGIN = 'READ_ROLE_BEGIN';
export const READ_ROLE_SUCCESS = 'READ_ROLE_SUCCESS';
export const READ_ROLE_FAIL = 'READ_ROLE_FAIL';
export const CREATE_ROLE_BEGIN = 'CREATE_ROLE_BEGIN';
export const CREATE_ROLE_SUCCESS = 'CREATE_ROLE_SUCCESS';
export const CREATE_ROLE_FAIL = 'CREATE_ROLE_FAIL';
export const DELETE_ROLE_BEGIN = 'DELETE_ROLE_BEGIN';
export const DELETE_ROLE_SUCCESS = 'DELETE_ROLE_SUCCESS';
export const DELETE_ROLE_FAIL = 'DELETE_ROLE_FAIL';

/* Read ROLE List Start */
function readRoleListBegin() {
  return { type: READ_ROLE_LIST_BEGIN };
}

function readRoleListSuccess(data) {
  return { type: READ_ROLE_LIST_SUCCESS, payload: data };
}

function readRoleListFail(data) {
  return { type: READ_ROLE_LIST_FAIL, payload: data };
}

export function readRoleList(departmentId) {
  return (dispatch) => {
    dispatch(readRoleListBegin());
    return roleApi.readRoleList(departmentId).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readRoleListSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readRoleListFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read ROLE List End */

/* Read ROLE Start */
function readRoleBegin() {
  return { type: READ_ROLE_BEGIN };
}

function readRoleSuccess(data) {
  return { type: READ_ROLE_SUCCESS, payload: data };
}

function readRoleFail(data) {
  return { type: READ_ROLE_FAIL, payload: data };
}

export function readRole(id) {
  return (dispatch) => {
    dispatch(readRoleBegin());
    return roleApi.readRole(id).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readRoleSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readRoleFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read ROLE List End */

/* Add ROLE List Start */
function createRoleBegin() {
  return { type: CREATE_ROLE_BEGIN };
}

function createRoleSuccess(data) {
  return { type: CREATE_ROLE_SUCCESS, payload: data };
}

function createRoleFail(data) {
  return { type: CREATE_ROLE_FAIL, payload: data };
}

export function createRole(data) {
  return (dispatch) => {
    dispatch(createRoleBegin());
    return roleApi.createRole(data).then((response) => {
      switch (response.status) {
        case HttpStatus.CREATED:
          dispatch(createRoleSuccess(response.data));
          dispatch(push('/role'));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(createRoleFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add ROLE List End */

/* Delete ROLE List Start */
function deleteRoleBegin() {
  return { type: DELETE_ROLE_BEGIN };
}

function deleteRoleSuccess(data) {
  return { type: DELETE_ROLE_SUCCESS, payload: data };
}

function deleteRoleFail(data) {
  return { type: DELETE_ROLE_FAIL, payload: data };
}

export function deleteRole(key) {
  return (dispatch) => {
    dispatch(deleteRoleBegin());
    return roleApi.deleteRole(key).then((response) => {
      switch (response.status) {
        case HttpStatus.NO_CONTENT:
          dispatch(deleteRoleSuccess(key));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(deleteRoleFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Delete ROLE List End */
