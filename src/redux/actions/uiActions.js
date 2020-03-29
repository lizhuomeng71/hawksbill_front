export const CHANGE_TASK_EQUIPMENT_MODE = 'CHANGE_TASK_EQUIPMENT_MODE';
export const CHANGE_TASK_MATERIAL_MODE = 'CHANGE_TASK_MATERIAL_MODE';

export function changeTaskEquipmentMode(data) {
  return { type: CHANGE_TASK_EQUIPMENT_MODE, payload: data };
}
export function changeTaskMaterialMode(data) {
  return { type: CHANGE_TASK_MATERIAL_MODE, payload: data };
}
