import update from 'immutability-helper';
import {
  READ_PERSON_LIST_SUCCESS,
  READ_PERSON_SUCCESS,
  CREATE_PERSON_SUCCESS,
  DELETE_PERSON_SUCCESS,
} from '../actions/personActions';

const initialState = {
  list: [],
  item: {},
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
    default:
      return state;
  }
}
