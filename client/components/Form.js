import formStyle from "../sass/form.module.scss";
import {
  setInputAction,
  callSetInputAction,
  clearInput,
} from "../actions/setInputAction";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
export default function Form() {
  const inputState = useSelector((state) => state.setValueReducer);
  const [inputError, setInputError] = useState(false);
  const dispatch = useDispatch();

  function setInputValue(ev) {
    if (inputError) {
      setInputError(false);
    }
    dispatch(setInputAction(ev.target.value));
  }

  return (
    <form
      className={
        inputError
          ? `${formStyle.error} ${formStyle.formContainer}`
          : `${formStyle.formContainer}`
      }
    >
      <i className={`material-icons ${formStyle.locationIcon}`}>location_on</i>
      <input
        aria-label="Digite o CEP"
        placeholder="Digite o CEP"
        type="text"
        maxLength="8"
        onChange={setInputValue}
        value={inputState}
      ></input>
      <button
        onClick={(event) => {
          if (inputState === "" || inputState.length < 8) {
            setInputError(true);
            event.preventDefault();
            return;
          } else {
            event.preventDefault();
            dispatch(callSetInputAction(true));
            setTimeout(() => {
              dispatch(clearInput());
            }, 100);
          }
        }}
      >
        Enviar
      </button>
    </form>
  );
}
