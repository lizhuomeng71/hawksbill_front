import update from 'immutability-helper';
import {
  READ_TASK_LIST_SUCCESS,
  READ_TASK_SUCCESS,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
} from '../actions/taskActions';

const initialState = {
  list: [],
  item: {},
};

export default function (state = initialState, action) {
  let index = null;
  switch (action.type) {
    case READ_TASK_LIST_SUCCESS:
      return update(
        state, {
          list: { $set: action.payload },
        },
      );
    case READ_TASK_SUCCESS:
      return update(
        state, {
          item: { $set: action.payload },
        },
      );
    case DELETE_TASK_SUCCESS:
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
