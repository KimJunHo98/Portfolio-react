import React from "react";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pointer from "./components/Pointer";
import './scss/Style.scss';

function App() {
  return (
    <>
      <Pointer />
      <div id="wrap" className="wrap">
        <Header/>
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
