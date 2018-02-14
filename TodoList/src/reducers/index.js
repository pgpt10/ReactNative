import { combineReducers } from 'redux';
import todos from './TodosReducer';
import visibilityFilter from './VisibilityFilterReducer';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
