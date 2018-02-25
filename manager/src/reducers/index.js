import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';


const reducers = combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});

export default reducers;
