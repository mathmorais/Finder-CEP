import responseStyles from "../sass/response.module.scss";
import { callSetInputAction } from "../actions/setInputAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import loadingAnim from "../public/animations/loading.json";

export default function Response() {
  const dispatch = useDispatch();
  const inputState = useSelector((state) => state.setValueReducer);
  const callApiState = useSelector((state) => state.callInputReducer);

  const [dataResult, setDataResult] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (callApiState) {
      getApiResult();
    } else {
      return null;
    }
  }, [callApiState]);

  function getApiResult() {
    setPending(true);

    const url = "http://localhost:4000/api/getAddress";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ cep: inputState }),
    })
      .then((res) => {
        setPending(false);
        return res.json();
      })
      .then(async (data) => {
        dispatch(callSetInputAction(false));
        setDataResult(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function WriteApiResult() {
    const arrayKeys = Object.keys(dataResult);

    if (dataResult.erro || dataResult.message) {
      return (
        <div className={responseStyles.errorContainer}>
          <h2>CEP não encontrado</h2>
          <div className={responseStyles.imageContainer}></div>
        </div>
      );
    }

    if (arrayKeys) {
      return (
        <div
          className={responseStyles.resultContainer}
          style={arrayKeys.length > 1 ? { opacity: 1 } : { opacity: 0 }}
        >
          <ul className={responseStyles.resultData}>
            {arrayKeys.map((el, index) => {
              switch (el) {
                case "ibge":
                  return;
                case "siafi":
                  return;
                case "gia":
                  return;
              }
              return (
                <li key={index}>
                  {el} : {dataResult[el]}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }

  // Lottie Config
  const Config = {
    loop: true,
    autoplay: true,
    animationData: loadingAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (pending) {
    return <Lottie options={Config} width={200} height={200}></Lottie>;
  } else {
    return <WriteApiResult></WriteApiResult>;
  }
}
