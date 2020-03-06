import update from 'immutability-helper';
import {
  READ_EQUIPMENT_LIST_SUCCESS,
  READ_EQUIPMENT_SUCCESS,
  CREATE_EQUIPMENT_SUCCESS,
  DELETE_EQUIPMENT_SUCCESS,
  CHANGE_EQUIPMENT_PAGE_STATE,
} from '../actions/equipmentActions';

const initialState = {
  list: [],
  item: {},
  currentPageState: 'list',
};

export default function (state = initialState, action) {
  let index = null;
  switch (action.type) {
    case READ_EQUIPMENT_LIST_SUCCESS:
      return update(
        state, {
          list: { $set: action.payload },
        },
      );
    case READ_EQUIPMENT_SUCCESS:
      return update(
        state, {
          item: { $set: action.payload },
        },
      );
    case DELETE_EQUIPMENT_SUCCESS:
      index = state.list.findIndex(i => i._key === action.payload);
      return update(
        state, {
          list: { $splice: [[index, 1]] },
        },
      );
    case CHANGE_EQUIPMENT_PAGE_STATE:
      return update(
        state, {
          currentPageState: { $set: action.payload },
        },
      );
    default:
      return state;
  }
}
