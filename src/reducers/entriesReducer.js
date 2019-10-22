const entriesReducer = (state = null, action) => {
  switch (action.type) {
    case "LOAD_ENTRIES":
      //console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default entriesReducer;
