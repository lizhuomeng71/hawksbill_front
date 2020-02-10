import { push } from 'react-router-redux';

import departmentApi from '../apis/departmentApi';
import * as HttpStatus from '../../shared/constants/HttpStatus';

export const READ_DEPARTMENT_LIST_BEGIN = 'READ_DEPARTMENT_LIST_BEGIN';
export const READ_DEPARTMENT_LIST_SUCCESS = 'READ_DEPARTMENT_LIST_SUCCESS';
export const READ_DEPARTMENT_LIST_FAIL = 'READ_DEPARTMENT_LIST_FAIL';
export const READ_DEPARTMENT_BEGIN = 'READ_DEPARTMENT_BEGIN';
export const READ_DEPARTMENT_SUCCESS = 'READ_DEPARTMENT_SUCCESS';
export const READ_DEPARTMENT_FAIL = 'READ_DEPARTMENT_FAIL';
export const CREATE_DEPARTMENT_BEGIN = 'CREATE_DEPARTMENT_BEGIN';
export const CREATE_DEPARTMENT_SUCCESS = 'CREATE_DEPARTMENT_SUCCESS';
export const CREATE_DEPARTMENT_FAIL = 'CREATE_DEPARTMENT_FAIL';
export const DELETE_DEPARTMENT_BEGIN = 'DELETE_DEPARTMENT_BEGIN';
export const DELETE_DEPARTMENT_SUCCESS = 'DELETE_DEPARTMENT_SUCCESS';
export const DELETE_DEPARTMENT_FAIL = 'DELETE_DEPARTMENT_FAIL';

/* Read DEPARTMENT List Start */
function readDepartmentListBegin() {
  return { type: READ_DEPARTMENT_LIST_BEGIN };
}

function readDepartmentListSuccess(data) {
  return { type: READ_DEPARTMENT_LIST_SUCCESS, payload: data };
}

function readDepartmentListFail(data) {
  return { type: READ_DEPARTMENT_LIST_FAIL, payload: data };
}

export function readDepartmentList() {
  return (dispatch) => {
    dispatch(readDepartmentListBegin());
    return departmentApi.readDepartmentList().then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readDepartmentListSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readDepartmentListFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read DEPARTMENT List End */

/* Read DEPARTMENT Start */
function readDepartmentBegin() {
  return { type: READ_DEPARTMENT_BEGIN };
}

function readDepartmentSuccess(data) {
  return { type: READ_DEPARTMENT_SUCCESS, payload: data };
}

function readDepartmentFail(data) {
  return { type: READ_DEPARTMENT_FAIL, payload: data };
}

export function readDepartment(id) {
  return (dispatch) => {
    dispatch(readDepartmentBegin());
    return departmentApi.readDepartment(id).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readDepartmentSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readDepartmentFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read DEPARTMENT List End */

/* Add DEPARTMENT List Start */
function createDepartmentBegin() {
  return { type: CREATE_DEPARTMENT_BEGIN };
}

function createDepartmentSuccess(data) {
  return { type: CREATE_DEPARTMENT_SUCCESS, payload: data };
}

function createDepartmentFail(data) {
  return { type: CREATE_DEPARTMENT_FAIL, payload: data };
}

export function createDepartment(data) {
  return (dispatch) => {
    dispatch(createDepartmentBegin());
    return departmentApi.createDepartment(data).then((response) => {
      switch (response.status) {
        case HttpStatus.CREATED:
          dispatch(createDepartmentSuccess(response.data));
          dispatch(push('/department'));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(createDepartmentFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add DEPARTMENT List End */

/* Delete DEPARTMENT List Start */
function deleteDepartmentBegin() {
  return { type: DELETE_DEPARTMENT_BEGIN };
}

function deleteDepartmentSuccess(data) {
  return { type: DELETE_DEPARTMENT_SUCCESS, payload: data };
}

function deleteDepartmentFail(data) {
  return { type: DELETE_DEPARTMENT_FAIL, payload: data };
}

export function deleteDepartment(key) {
  return (dispatch) => {
    dispatch(deleteDepartmentBegin());
    return departmentApi.deleteDepartment(key).then((response) => {
      switch (response.status) {
        case HttpStatus.NO_CONTENT:
          dispatch(deleteDepartmentSuccess(key));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(deleteDepartmentFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Delete DEPARTMENT List End */
