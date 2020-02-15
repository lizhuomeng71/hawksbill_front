import update from 'immutability-helper';
import {
  READ_REVIEW_LIST_SUCCESS,
  READ_REVIEW_SUCCESS,
  CREATE_REVIEW_SUCCESS,
  DELETE_REVIEW_SUCCESS,
  CHANGE_REVIEW_PAGE_STATE,
} from '../actions/reviewActions';

const initialState = {
  list: [],
  item: {},
  currentPageState: 'add',
};

export default function (state = initialState, action) {
  let index = null;
  switch (action.type) {
    case READ_REVIEW_LIST_SUCCESS:
      return update(
        state, {
          list: { $set: action.payload },
        },
      );
    case READ_REVIEW_SUCCESS:
      return update(
        state, {
          item: { $set: action.payload },
        },
      );
    case DELETE_REVIEW_SUCCESS:
      index = state.list.findIndex(i => i._key === action.payload);
      return update(
        state, {
          list: { $splice: [[index, 1]] },
        },
      );
    case CHANGE_REVIEW_PAGE_STATE:
      return update(
        state, {
          currentPageState: { $set: action.payload },
        },
      );
    default:
      return state;
  }
}
