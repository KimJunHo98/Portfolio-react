import React from "react";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './scss/Style.scss';

function App() {
  return (
    <>
      <div className="wrap">
        <Header/>
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
