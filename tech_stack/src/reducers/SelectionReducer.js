const SelectionReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case 'SELECT_LIBRARY':
      return action.id;

    default:
      return state;
  }
};

export default SelectionReducer;
