// import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import './scss/Style.scss';

function App() {
  return (
    <>
      <div className="wrap horizontal_scroll">
        <div class="scroll_container">
          <Header />
          <MainPage />
        </div>
      </div>
    </>
  );
}

export default App;
