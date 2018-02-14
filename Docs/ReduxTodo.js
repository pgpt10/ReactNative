const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'TOGGLE_TODO':
      if (state.id === action.id) {
        return {...state, completed: !state.completed};
      }
      return state;

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
      
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
            
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
     
    default:
      return state;
  }
};

const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

/*const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});*/

/*const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
};*/

const { createStore } = Redux;
const store = createStore(todoApp);

store.dispatch({type: 'ADD_TODO', id: 1, text: 'Learn Redux'});
store.dispatch({type: 'ADD_TODO', id: 2, text: 'Learn React'});
store.dispatch({type: 'TOGGLE_TODO', id: 2});

store.getState();