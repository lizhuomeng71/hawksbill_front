import update from 'immutability-helper';
import {
  READ_DEPARTMENT_LIST_SUCCESS,
  READ_DEPARTMENT_SUCCESS,
  CREATE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_SUCCESS,
} from '../actions/departmentActions';

const initialState = {
  list: [],
  item: {},
};

export default function (state = initialState, action) {
  let index = null;
  switch (action.type) {
    case READ_DEPARTMENT_LIST_SUCCESS:
      return update(
        state, {
          list: { $set: action.payload },
        },
      );
    case READ_DEPARTMENT_SUCCESS:
      return update(
        state, {
          item: { $set: action.payload },
        },
      );
    case DELETE_DEPARTMENT_SUCCESS:
      index = state.list.findIndex(i => i._key === action.payload);
      return update(
        state, {
          list: { $splice: [[index, 1]] },
        },
      );
    default:
      return state;
  }
}
