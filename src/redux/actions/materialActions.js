import { push } from 'react-router-redux';

import materialApi from '../apis/materialApi';
import * as HttpStatus from '../../shared/constants/HttpStatus';

export const READ_MATERIAL_LIST_BEGIN = 'READ_MATERIAL_LIST_BEGIN';
export const READ_MATERIAL_LIST_SUCCESS = 'READ_MATERIAL_LIST_SUCCESS';
export const READ_MATERIAL_LIST_FAIL = 'READ_MATERIAL_LIST_FAIL';
export const READ_MATERIAL_BEGIN = 'READ_MATERIAL_BEGIN';
export const READ_MATERIAL_SUCCESS = 'READ_MATERIAL_SUCCESS';
export const READ_MATERIAL_FAIL = 'READ_MATERIAL_FAIL';
export const CREATE_MATERIAL_BEGIN = 'CREATE_MATERIAL_BEGIN';
export const CREATE_MATERIAL_SUCCESS = 'CREATE_MATERIAL_SUCCESS';
export const CREATE_MATERIAL_FAIL = 'CREATE_MATERIAL_FAIL';
export const DELETE_MATERIAL_BEGIN = 'DELETE_MATERIAL_BEGIN';
export const DELETE_MATERIAL_SUCCESS = 'DELETE_MATERIAL_SUCCESS';
export const DELETE_MATERIAL_FAIL = 'DELETE_MATERIAL_FAIL';
export const CHANGE_MATERIAL_PAGE_STATE = 'CHANGE_MATERIAL_PAGE_STATE';


/* Read MATERIAL List Start */
function readMaterialListBegin() {
  return { type: READ_MATERIAL_LIST_BEGIN };
}

function readMaterialListSuccess(data) {
  return { type: READ_MATERIAL_LIST_SUCCESS, payload: data };
}

function readMaterialListFail(data) {
  return { type: READ_MATERIAL_LIST_FAIL, payload: data };
}

export function readMaterialList() {
  return (dispatch) => {
    dispatch(readMaterialListBegin());
    return materialApi.readMaterialList().then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readMaterialListSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readMaterialListFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read MATERIAL List End */

/* Read MATERIAL Start */
function readMaterialBegin() {
  return { type: READ_MATERIAL_BEGIN };
}

function readMaterialSuccess(data) {
  return { type: READ_MATERIAL_SUCCESS, payload: data };
}

function readMaterialFail(data) {
  return { type: READ_MATERIAL_FAIL, payload: data };
}

export function readMaterial(id) {
  return (dispatch) => {
    dispatch(readMaterialBegin());
    return materialApi.readMaterial(id).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readMaterialSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readMaterialFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read MATERIAL List End */

/* Add MATERIAL List Start */
function createMaterialBegin() {
  return { type: CREATE_MATERIAL_BEGIN };
}

function createMaterialSuccess(data) {
  return { type: CREATE_MATERIAL_SUCCESS, payload: data };
}

function createMaterialFail(data) {
  return { type: CREATE_MATERIAL_FAIL, payload: data };
}

export function createMaterial(data) {
  return (dispatch) => {
    dispatch(createMaterialBegin());
    return materialApi.createMaterial(data).then((response) => {
      switch (response.status) {
        case HttpStatus.CREATED:
          dispatch(createMaterialSuccess(response.data));
          dispatch(push('/material'));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(createMaterialFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add MATERIAL List End */

/* Delete MATERIAL List Start */
function deleteMaterialBegin() {
  return { type: DELETE_MATERIAL_BEGIN };
}

function deleteMaterialSuccess(data) {
  return { type: DELETE_MATERIAL_SUCCESS, payload: data };
}

function deleteMaterialFail(data) {
  return { type: DELETE_MATERIAL_FAIL, payload: data };
}

export function deleteMaterial(key) {
  return (dispatch) => {
    dispatch(deleteMaterialBegin());
    return materialApi.deleteMaterial(key).then((response) => {
      switch (response.status) {
        case HttpStatus.NO_CONTENT:
          dispatch(deleteMaterialSuccess(key));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(deleteMaterialFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Delete MATERIAL List End */

export function changeMaterialPageState(data) {
  return { type: CHANGE_MATERIAL_PAGE_STATE, payload: data };
}
