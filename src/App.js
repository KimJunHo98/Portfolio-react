import React from "react";
import MainPage from "./components/layout/MainPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
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
