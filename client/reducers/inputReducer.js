function setValueReducer(state = "", action) {
  switch (action.type) {
    case "SET":
      return (state = action.payload);
    case "CLEAR":
      return (state = "");
    default:
      return state;
  }
}

function callInputReducer(state = false, action) {
  switch (action.type) {
    case "CALL":
      return (state = action.payload);
    default:
      return state;
  }
}

export { setValueReducer, callInputReducer };
