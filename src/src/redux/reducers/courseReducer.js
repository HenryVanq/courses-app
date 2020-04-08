const courseReducer = (state = [], action) => {
  // will be array bcs we want to store courses, action is a payload from action
  switch (action.type) {
    case "CREACTE_COURSE":
      return [...state, { ...action.course }];
    default:
      return state;
  }
};

export default courseReducer;
