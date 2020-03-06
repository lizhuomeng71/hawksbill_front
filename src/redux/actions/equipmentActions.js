import { push } from 'react-router-redux';

import equipmentApi from '../apis/equipmentApi';
import * as HttpStatus from '../../shared/constants/HttpStatus';

export const READ_EQUIPMENT_LIST_BEGIN = 'READ_EQUIPMENT_LIST_BEGIN';
export const READ_EQUIPMENT_LIST_SUCCESS = 'READ_EQUIPMENT_LIST_SUCCESS';
export const READ_EQUIPMENT_LIST_FAIL = 'READ_EQUIPMENT_LIST_FAIL';
export const READ_EQUIPMENT_BEGIN = 'READ_EQUIPMENT_BEGIN';
export const READ_EQUIPMENT_SUCCESS = 'READ_EQUIPMENT_SUCCESS';
export const READ_EQUIPMENT_FAIL = 'READ_EQUIPMENT_FAIL';
export const CREATE_EQUIPMENT_BEGIN = 'CREATE_EQUIPMENT_BEGIN';
export const CREATE_EQUIPMENT_SUCCESS = 'CREATE_EQUIPMENT_SUCCESS';
export const CREATE_EQUIPMENT_FAIL = 'CREATE_EQUIPMENT_FAIL';
export const DELETE_EQUIPMENT_BEGIN = 'DELETE_EQUIPMENT_BEGIN';
export const DELETE_EQUIPMENT_SUCCESS = 'DELETE_EQUIPMENT_SUCCESS';
export const DELETE_EQUIPMENT_FAIL = 'DELETE_EQUIPMENT_FAIL';
export const CHANGE_EQUIPMENT_PAGE_STATE = 'CHANGE_EQUIPMENT_PAGE_STATE';


/* Read EQUIPMENT List Start */
function readEquipmentListBegin() {
  return { type: READ_EQUIPMENT_LIST_BEGIN };
}

function readEquipmentListSuccess(data) {
  return { type: READ_EQUIPMENT_LIST_SUCCESS, payload: data };
}

function readEquipmentListFail(data) {
  return { type: READ_EQUIPMENT_LIST_FAIL, payload: data };
}

export function readEquipmentList() {
  return (dispatch) => {
    dispatch(readEquipmentListBegin());
    return equipmentApi.readEquipmentList().then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readEquipmentListSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readEquipmentListFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read EQUIPMENT List End */

/* Read EQUIPMENT Start */
function readEquipmentBegin() {
  return { type: READ_EQUIPMENT_BEGIN };
}

function readEquipmentSuccess(data) {
  return { type: READ_EQUIPMENT_SUCCESS, payload: data };
}

function readEquipmentFail(data) {
  return { type: READ_EQUIPMENT_FAIL, payload: data };
}

export function readEquipment(id) {
  return (dispatch) => {
    dispatch(readEquipmentBegin());
    return equipmentApi.readEquipment(id).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readEquipmentSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readEquipmentFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read EQUIPMENT List End */

/* Add EQUIPMENT List Start */
function createEquipmentBegin() {
  return { type: CREATE_EQUIPMENT_BEGIN };
}

function createEquipmentSuccess(data) {
  return { type: CREATE_EQUIPMENT_SUCCESS, payload: data };
}

function createEquipmentFail(data) {
  return { type: CREATE_EQUIPMENT_FAIL, payload: data };
}

export function createEquipment(data) {
  return (dispatch) => {
    dispatch(createEquipmentBegin());
    return equipmentApi.createEquipment(data).then((response) => {
      switch (response.status) {
        case HttpStatus.CREATED:
          dispatch(createEquipmentSuccess(response.data));
          dispatch(push('/equipment'));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(createEquipmentFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add EQUIPMENT List End */

/* Delete EQUIPMENT List Start */
function deleteEquipmentBegin() {
  return { type: DELETE_EQUIPMENT_BEGIN };
}

function deleteEquipmentSuccess(data) {
  return { type: DELETE_EQUIPMENT_SUCCESS, payload: data };
}

function deleteEquipmentFail(data) {
  return { type: DELETE_EQUIPMENT_FAIL, payload: data };
}

export function deleteEquipment(key) {
  return (dispatch) => {
    dispatch(deleteEquipmentBegin());
    return equipmentApi.deleteEquipment(key).then((response) => {
      switch (response.status) {
        case HttpStatus.NO_CONTENT:
          dispatch(deleteEquipmentSuccess(key));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(deleteEquipmentFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Delete EQUIPMENT List End */

export function changeEquipmentPageState(data) {
  return { type: CHANGE_EQUIPMENT_PAGE_STATE, payload: data };
}
