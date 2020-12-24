import finderStyle from "../sass/finder.module.scss";
import Form from "./Form";
import Response from "./Response";
export default function Finder() {
  return (
    <div className={finderStyle.container}>
      <div className={finderStyle.imageContainer}></div>
      <div className={finderStyle.finderApp}>
        <h1>Finder</h1>
        <Form></Form>
        <Response></Response>
      </div>
    </div>
  );
}
