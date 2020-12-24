const setInputAction = (value) => {
  return { type: "SET", payload: value };
};
const clearInput = () => {
  return { type: "CLEAR" };
};
const callSetInputAction = (action) => {
  return { type: "CALL", payload: action };
};

export { setInputAction, callSetInputAction, clearInput };
