import update from 'immutability-helper';
import {
  READ_ROLE_LIST_SUCCESS,
  READ_ROLE_SUCCESS,
  CREATE_ROLE_SUCCESS,
  DELETE_ROLE_SUCCESS,
} from '../actions/roleActions';

const initialState = {
  list: [],
  item: {},
};

export default function (state = initialState, action) {
  let index = null;
  switch (action.type) {
    case READ_ROLE_LIST_SUCCESS:
      return update(
        state, {
          list: { $set: action.payload },
        },
      );
    case READ_ROLE_SUCCESS:
      return update(
        state, {
          item: { $set: action.payload },
        },
      );
    case DELETE_ROLE_SUCCESS:
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
