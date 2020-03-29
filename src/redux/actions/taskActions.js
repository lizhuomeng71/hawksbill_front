import { push } from 'react-router-redux';

import taskApi from '../apis/taskApi';
import * as HttpStatus from '../../shared/constants/HttpStatus';
import {
  changeTaskEquipmentMode,
  changeTaskMaterialMode,
} from './uiActions';

export const READ_TASK_LIST_BEGIN = 'READ_TASK_LIST_BEGIN';
export const READ_TASK_LIST_SUCCESS = 'READ_TASK_LIST_SUCCESS';
export const READ_TASK_LIST_FAIL = 'READ_TASK_LIST_FAIL';
export const READ_TASK_BEGIN = 'READ_TASK_BEGIN';
export const READ_TASK_SUCCESS = 'READ_TASK_SUCCESS';
export const READ_TASK_FAIL = 'READ_TASK_FAIL';
export const READ_TASK_SUBTASK_LIST_BEGIN = 'READ_TASK_SUBTASK_LIST_BEGIN';
export const READ_TASK_SUBTASK_LIST_SUCCESS = 'READ_TASK_SUBTASK_LIST_SUCCESS';
export const READ_TASK_SUBTASK_LIST_FAIL = 'READ_TASK_SUBTASK_LIST_FAIL';
export const CREATE_TASK_BEGIN = 'CREATE_TASK_BEGIN';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAIL = 'CREATE_TASK_FAIL';
export const DELETE_TASK_BEGIN = 'DELETE_TASK_BEGIN';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAIL = 'DELETE_TASK_FAIL';
export const CREATE_TASK_EQUIPMENT_BEGIN = 'CREATE_TASK_EQUIPMENT_BEGIN';
export const CREATE_TASK_EQUIPMENT_SUCCESS = 'CREATE_TASK_EQUIPMENT_SUCCESS';
export const CREATE_TASK_EQUIPMENT_FAIL = 'CREATE_TASK_EQUIPMENT_FAIL';
export const DELETE_TASK_EQUIPMENT_BEGIN = 'DELETE_TASK_EQUIPMENT_BEGIN';
export const DELETE_TASK_EQUIPMENT_SUCCESS = 'DELETE_TASK_EQUIPMENT_SUCCESS';
export const DELETE_TASK_EQUIPMENT_FAIL = 'DELETE_TASK_EQUIPMENT_FAIL';
export const CREATE_TASK_MATERIAL_BEGIN = 'CREATE_TASK_MATERIAL_BEGIN';
export const CREATE_TASK_MATERIAL_SUCCESS = 'CREATE_TASK_MATERIAL_SUCCESS';
export const CREATE_TASK_MATERIAL_FAIL = 'CREATE_TASK_MATERIAL_FAIL';
export const DELETE_TASK_MATERIAL_BEGIN = 'DELETE_TASK_MATERIAL_BEGIN';
export const DELETE_TASK_MATERIAL_SUCCESS = 'DELETE_TASK_MATERIAL_SUCCESS';
export const DELETE_TASK_MATERIAL_FAIL = 'DELETE_TASK_MATERIAL_FAIL';
/* Read Task List Start */
function readTaskListBegin() {
  return { type: READ_TASK_LIST_BEGIN };
}

function readTaskListSuccess(data) {
  return { type: READ_TASK_LIST_SUCCESS, payload: data };
}

function readTaskListFail(data) {
  return { type: READ_TASK_LIST_FAIL, payload: data };
}

export function readTaskList() {
  return (dispatch) => {
    dispatch(readTaskListBegin());
    return taskApi.readTaskList().then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readTaskListSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readTaskListFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Read Task List End */

/* Read Task Start */
function readTaskBegin() {
  return { type: READ_TASK_BEGIN };
}

function readTaskSuccess(data) {
  return { type: READ_TASK_SUCCESS, payload: data };
}

function readTaskFail(data) {
  return { type: READ_TASK_FAIL, payload: data };
}

export function readTask(id) {
  return (dispatch) => {
    dispatch(readTaskBegin());
    return taskApi.readTask(id).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readTaskSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readTaskFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}

/* Read Task List End */


/* Read Task Sub Task Start */
function readTaskSubTaskListBegin() {
  return { type: READ_TASK_SUBTASK_LIST_BEGIN };
}

function readTaskSubTaskListSuccess(data) {
  return { type: READ_TASK_SUBTASK_LIST_SUCCESS, payload: data };
}

function readTaskSubTaskListFail(data) {
  return { type: READ_TASK_SUBTASK_LIST_FAIL, payload: data };
}

export function readTaskSubTaskList(id) {
  return (dispatch) => {
    dispatch(readTaskSubTaskListBegin());
    return taskApi.readTaskSubTaskList(id).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(readTaskSubTaskListSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(readTaskSubTaskListFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}

/* Read Task Sub Task End */

/* Add Task Start */
function createTaskBegin() {
  return { type: CREATE_TASK_BEGIN };
}

function createTaskSuccess(data) {
  return { type: CREATE_TASK_SUCCESS, payload: data };
}

function createTaskFail(data) {
  return { type: CREATE_TASK_FAIL, payload: data };
}

export function createTask(data) {
  return (dispatch) => {
    dispatch(createTaskBegin());
    return taskApi.createTask(data).then((response) => {
      switch (response.status) {
        case HttpStatus.CREATED:
          dispatch(createTaskSuccess(response.data));
          dispatch(push('/task/'));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(createTaskFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add Task End */

/* Delete Task List Start */
function deleteTaskBegin() {
  return { type: DELETE_TASK_BEGIN };
}

function deleteTaskSuccess(data) {
  return { type: DELETE_TASK_SUCCESS, payload: data };
}

function deleteTaskFail(data) {
  return { type: DELETE_TASK_FAIL, payload: data };
}

export function deleteTask(key) {
  return (dispatch) => {
    dispatch(deleteTaskBegin());
    return taskApi.deleteTask(key).then((response) => {
      switch (response.status) {
        case HttpStatus.NO_CONTENT:
          dispatch(deleteTaskSuccess(key));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(deleteTaskFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}

/* Delete Task List End */


/* Add Task Start */
function createTaskEquipmentBegin() {
  return { type: CREATE_TASK_EQUIPMENT_BEGIN };
}

function createTaskEquipmentSuccess(data) {
  return { type: CREATE_TASK_EQUIPMENT_SUCCESS, payload: data };
}

function createTaskEquipmentFail(data) {
  return { type: CREATE_TASK_EQUIPMENT_FAIL, payload: data };
}

export function createTaskEquipment(data) {
  console.log(data);
  return (dispatch) => {
    dispatch(createTaskEquipmentBegin());
    return taskApi.createTaskEquipment(data).then((response) => {
      switch (response.status) {
        case HttpStatus.CREATED:
          dispatch(changeTaskEquipmentMode('list'));
          dispatch(createTaskEquipmentSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(createTaskEquipmentFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add Task End */

/* Add Task Start */
function deleteTaskEquipmentBegin() {
  return { type: DELETE_TASK_EQUIPMENT_BEGIN };
}

function deleteTaskEquipmentSuccess(data) {
  return { type: DELETE_TASK_EQUIPMENT_SUCCESS, payload: data };
}

function deleteTaskEquipmentFail(data) {
  return { type: DELETE_TASK_EQUIPMENT_FAIL, payload: data };
}

export function deleteTaskEquipment(taskId, equipmentId) {
  return (dispatch) => {
    dispatch(deleteTaskEquipmentBegin());
    return taskApi.deleteTaskEquipment(taskId, equipmentId).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(deleteTaskEquipmentSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(deleteTaskEquipmentFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add Task End */

/* Add Task Start */
function createTaskMaterialBegin() {
  return { type: CREATE_TASK_MATERIAL_BEGIN };
}

function createTaskMaterialSuccess(data) {
  return { type: CREATE_TASK_MATERIAL_SUCCESS, payload: data };
}

function createTaskMaterialFail(data) {
  return { type: CREATE_TASK_MATERIAL_FAIL, payload: data };
}

export function createTaskMaterial(data) {
  console.log(data);
  return (dispatch) => {
    dispatch(createTaskMaterialBegin());
    return taskApi.createTaskMaterial(data).then((response) => {
      switch (response.status) {
        case HttpStatus.CREATED:
          dispatch(changeTaskMaterialMode('list'));
          dispatch(createTaskMaterialSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(createTaskMaterialFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add Task End */

/* Add Task Start */
function deleteTaskMaterialBegin() {
  return { type: DELETE_TASK_MATERIAL_BEGIN };
}

function deleteTaskMaterialSuccess(data) {
  return { type: DELETE_TASK_MATERIAL_SUCCESS, payload: data };
}

function deleteTaskMaterialFail(data) {
  return { type: DELETE_TASK_MATERIAL_FAIL, payload: data };
}

export function deleteTaskMaterial(data) {
  console.log(data);
  return (dispatch) => {
    dispatch(deleteTaskMaterialBegin());
    return taskApi.deleteTaskMaterial(data).then((response) => {
      switch (response.status) {
        case HttpStatus.OK:
          dispatch(deleteTaskMaterialSuccess(response.data));
          break;
        case HttpStatus.BAD_REQUEST:
          dispatch(deleteTaskMaterialFail(response.data));
          break;
        default:
      }
      return {};
    }).catch((error) => {
      throw (error);
    });
  };
}
/* Add Task End */
