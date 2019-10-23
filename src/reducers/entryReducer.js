const entryReducer = (state = null, action) => {
  switch (action.type) {
    case "LOAD_ENTRY":
      //console.log(action.payload);
      return action.payload ? action.payload : {};
    default:
      return state;
  }
};

export default entryReducer;
