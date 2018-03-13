import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

const EmployeeFormReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [payload.prop]: payload.value }; //key interpolation

    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
      
    default:
      return state;
  }
};

export default EmployeeFormReducer;
