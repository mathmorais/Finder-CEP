import Head from "next/head";
import Container from "../components/Container";
import Finder from "../components/Finder";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import FooterEl from "../components/Footer";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { callInputReducer, setValueReducer } from "../reducers/inputReducer";

const AllInputReducers = combineReducers({
  setValueReducer,
  callInputReducer,
});

const store = createStore(AllInputReducers);

export default function Home() {
  return (
    <Provider store={store}>
      <Container>
        <Head>
          <title>Finder by CEP</title>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
        </Head>
        <Header></Header>
        <main>
          <QuestionCard></QuestionCard>
          <Finder></Finder>
        </main>
        <FooterEl></FooterEl>
      </Container>
    </Provider>
  );
}
