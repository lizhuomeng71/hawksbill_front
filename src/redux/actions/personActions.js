import { push } from 'react-router-redux';

import personApi from '../apis/personApi';
import * as HttpStatus from '../../shared/constants/HttpStatus';

export const READ_PERSON_LIST_BEGIN = 'READ_PERSON_LIST_BEGIN';
export const READ_PERSON_LIST_SUCCESS = 'READ_PERSON_LIST_SUCCESS';
export const READ_PERSON_LIST_FAIL = 'READ_PERSON_LIST_FAIL';
export const READ_PERSON_BEGIN = 'READ_PERSON_BEGIN';
export const READ_PERSON_SUCCESS = 'READ_PERSON_SUCCESS';
export const READ_PERSON_FAIL = 'READ_PERSON_FAIL';
export const CREATE_PERSON_BEGIN = 'CREATE_PERSON_BEGIN';
export const CREATE_PERSON_SUCCESS = 'CREATE_PERSON_SUCCESS';
export const CREATE_PERSON_FAIL = 'CREATE_PERSON_FAIL';
export const DELETE_PERSON_BEGIN = 'DELETE_PERSON_BEGIN';
export const DELETE_PERSON_SUCCESS = 'DELETE_PERSON_SUCCESS';
export const DELETE_PERSON_FAIL = 'DELETE_PERSON_FAIL';

/* Read PERSON List Start */
function readPersonListBegin() {
  return { type: READ_PERSON_LIST_BEGIN };
}

function readPersonListSuccess(data) {
  return { type: READ_PERSON_LIST_SUCCESS, payload: data };
}

function readPersonListFail(data) {
  return { type: READ_PERSON_LIST_FAIL, payload: data };
}

export function readPersonList() {
  return (dispatch) => {
    dispatch(readPersonListBegin());
    return personApi.readPersonList().then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readPersonListSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readPersonListFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read PERSON List End */

/* Read PERSON Start */
function readPersonBegin() {
  return { type: READ_PERSON_BEGIN };
}

function readPersonSuccess(data) {
  return { type: READ_PERSON_SUCCESS, payload: data };
}

function readPersonFail(data) {
  return { type: READ_PERSON_FAIL, payload: data };
}

export function readPerson(id) {
  return (dispatch) => {
    dispatch(readPersonBegin());
    return personApi.readPerson(id).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readPersonSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readPersonFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read PERSON List End */

/* Add PERSON List Start */
function createPersonBegin() {
  return { type: CREATE_PERSON_BEGIN };
}

function createPersonSuccess(data) {
  return { type: CREATE_PERSON_SUCCESS, payload: data };
}

function createPersonFail(data) {
  return { type: CREATE_PERSON_FAIL, payload: data };
}

export function createPerson(data) {
  return (dispatch) => {
    dispatch(createPersonBegin());
    return personApi.createPerson(data).then((response) => {
      switch (response.status) {
        case HttpStatus.CREATED:
          dispatch(createPersonSuccess(response.data));
          dispatch(push('/person'));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(createPersonFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add PERSON List End */

/* Delete PERSON List Start */
function deletePersonBegin() {
  return { type: DELETE_PERSON_BEGIN };
}

function deletePersonSuccess(data) {
  return { type: DELETE_PERSON_SUCCESS, payload: data };
}

function deletePersonFail(data) {
  return { type: DELETE_PERSON_FAIL, payload: data };
}

export function deletePerson(key) {
  return (dispatch) => {
    dispatch(deletePersonBegin());
    return personApi.deletePerson(key).then((response) => {
      switch (response.status) {
        case HttpStatus.NO_CONTENT:
          dispatch(deletePersonSuccess(key));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(deletePersonFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Delete PERSON List End */
