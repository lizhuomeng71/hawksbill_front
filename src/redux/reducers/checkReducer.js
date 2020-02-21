import update from 'immutability-helper';
import {
  READ_CHECK_LIST_SUCCESS,
  READ_CHECK_SUCCESS,
  CREATE_CHECK_SUCCESS,
  DELETE_CHECK_SUCCESS,
  CHANGE_CHECK_PAGE_STATE,
} from '../actions/checkActions';

const initialState = {
  list: [],
  item: {},
  currentPageState: 'list',
};

export default function (state = initialState, action) {
  let index = null;
  switch (action.type) {
    case READ_CHECK_LIST_SUCCESS:
      return update(
        state, {
          list: { $set: action.payload },
        },
      );
    case READ_CHECK_SUCCESS:
      return update(
        state, {
          item: { $set: action.payload },
        },
      );
    case DELETE_CHECK_SUCCESS:
      index = state.list.findIndex(i => i._id === action.payload);
      console.log(state.list);
      console.log(action.payload);
      console.log(index);
      return update(
        state, {
          list: { $splice: [[index, 1]] },
        },
      );
    case CREATE_CHECK_SUCCESS:
      index = state.list.findIndex(i => i._key === action.payload);
      return update(
        state, {
          currentPageState: { $set: 'list' },
        },
      );
    case CHANGE_CHECK_PAGE_STATE:
      return update(
        state, {
          currentPageState: { $set: action.payload },
        },
      );
    default:
      return state;
  }
}
