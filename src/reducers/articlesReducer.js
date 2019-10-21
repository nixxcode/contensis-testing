const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_ARTICLES":
      return action.payload;
    default:
      return state;
  }
};

export default articlesReducer;
