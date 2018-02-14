const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

const { createStore } = Redux;
const store = createStore(counter);

store.getState(); //Current state of redux store
store.dispatch({type: 'INCREMENT'}); //Dispatch action to change the state
store.subscribe(() => {
  console.log(store.getState());
}); //Register a callback that the redux will call whenever an action has been dispatched