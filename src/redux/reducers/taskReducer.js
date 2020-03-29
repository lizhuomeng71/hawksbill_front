import update from 'immutability-helper';
import {
  READ_TASK_LIST_SUCCESS,
  READ_TASK_SUCCESS,
  READ_TASK_SUBTASK_LIST_SUCCESS,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_EQUIPMENT_SUCCESS,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_EQUIPMENT_SUCCESS,
} from '../actions/taskActions';
import {
  READ_REVIEW_LIST_SUCCESS,
} from '../actions/reviewActions';

const initialState = {
  list: [],
  item: {},
  subtaskList: [],
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
    case READ_TASK_SUBTASK_LIST_SUCCESS:
      return update(
        state, {
          subtaskList: { $set: action.payload },
        },
      );
    case DELETE_TASK_SUCCESS:
      index = state.list.findIndex(i => i._key === action.payload);
      return update(
        state, {
          list: { $splice: [[index, 1]] },
        },
      );
    case DELETE_TASK_EQUIPMENT_SUCCESS:
      index = state.item.equipments.findIndex(i => i._id === action.payload);
      console.log(index);
      return update(
        state, {
          item: {
            equipments: {
              $splice: [[index, 1]],
            },
          },
        },
      );
    default:
      return state;
  }
}
