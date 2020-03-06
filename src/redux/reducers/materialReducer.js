import update from 'immutability-helper';
import {
  READ_MATERIAL_LIST_SUCCESS,
  READ_MATERIAL_SUCCESS,
  CREATE_MATERIAL_SUCCESS,
  DELETE_MATERIAL_SUCCESS,
  CHANGE_MATERIAL_PAGE_STATE,
} from '../actions/materialActions';

const initialState = {
  list: [],
  item: {},
  currentPageState: 'list',
};

export default function (state = initialState, action) {
  let index = null;
  switch (action.type) {
    case READ_MATERIAL_LIST_SUCCESS:
      return update(
        state, {
          list: { $set: action.payload },
        },
      );
    case READ_MATERIAL_SUCCESS:
      return update(
        state, {
          item: { $set: action.payload },
        },
      );
    case DELETE_MATERIAL_SUCCESS:
      index = state.list.findIndex(i => i._key === action.payload);
      return update(
        state, {
          list: { $splice: [[index, 1]] },
        },
      );
    case CHANGE_MATERIAL_PAGE_STATE:
      return update(
        state, {
          currentPageState: { $set: action.payload },
        },
      );
    default:
      return state;
  }
}
