import React from "react";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './scss/Style.scss';

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  gsap.timeline({
    value: 100,
    ease: "none",
    scrollTrigger: { 
        trigger: ".wrap",
        start: 0,
        end: "max",
        scrub: true,
    }
  });     

  return (
    <>
      <div id="wrap" className="wrap">
        <progress id="progress" max="100" value="0"></progress>
        <Header/>
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
