import update from 'immutability-helper';
import {
  CHANGE_TASK_EQUIPMENT_MODE,
  CHANGE_TASK_MATERIAL_MODE,
} from '../actions/uiActions';

const initialState = {
  taskEquipmentMode: 'list',
  taskMaterialMode: 'list',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_TASK_EQUIPMENT_MODE:
      return update(
        state, {
          taskEquipmentMode: { $set: action.payload },
        },
      );
    case CHANGE_TASK_MATERIAL_MODE:
      return update(
        state, {
          taskMaterialMode: { $set: action.payload },
        },
      );
    default:
      return state;
  }
}
