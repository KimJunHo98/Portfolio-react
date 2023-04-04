// import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import './scss/Style.scss';

function App() {
  return (
    <>
      <div className="wrap">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
