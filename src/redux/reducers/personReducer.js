import update from 'immutability-helper';
import {
  READ_PERSON_LIST_SUCCESS,
  READ_PERSON_SUCCESS,
  CREATE_PERSON_SUCCESS,
  DELETE_PERSON_SUCCESS,
  CHANGE_PERSON_PAGE_STATE,
} from '../actions/personActions';

const initialState = {
  list: [],
  item: {},
  currentPageState: 'list',
};

export default function (state = initialState, action) {
  let index = null;
  switch (action.type) {
    case READ_PERSON_LIST_SUCCESS:
      return update(
        state, {
          list: { $set: action.payload },
        },
      );
    case READ_PERSON_SUCCESS:
      return update(
        state, {
          item: { $set: action.payload },
        },
      );
    case DELETE_PERSON_SUCCESS:
      index = state.list.findIndex(i => i._key === action.payload);
      return update(
        state, {
          list: { $splice: [[index, 1]] },
        },
      );
    case CHANGE_PERSON_PAGE_STATE:
      return update(
        state, {
          currentPageState: { $set: action.payload },
        },
      );
    default:
      return state;
  }
}
