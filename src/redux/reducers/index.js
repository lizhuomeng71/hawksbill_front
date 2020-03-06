import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import themeReducer from './themeReducer';
import sidebarReducer from './sidebarReducer';
import personReducer from './personReducer';
import departmentReducer from './departmentReducer';
import roleReducer from './roleReducer';
import taskReducer from './taskReducer';
import reviewReducer from './reviewReducer';
import checkReducer from './checkReducer';
import equipmentReducer from './equipmentReducer';
import materialReducer from './materialReducer';


const reducer = history => combineReducers({
  router: connectRouter(history),
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  person: personReducer,
  department: departmentReducer,
  role: roleReducer,
  task: taskReducer,
  review: reviewReducer,
  check: checkReducer,
  equipment: equipmentReducer,
  material: materialReducer,

});

export default reducer;
