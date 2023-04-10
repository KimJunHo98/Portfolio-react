import React from "react";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pointer from "./components/Pointer";
import './scss/Style.scss';

// gsap
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

function App() {
  // gsap.timeline({
  //   value: 100,
  //   ease: "none",
  //   scrollTrigger: { 
  //       trigger: ".wrap",
  //       start: 0,
  //       end: "max",
  //       scrub: true,
  //   }
  // });     

  return (
    <>
      {/* <progress id="progress" max="100" value="0"></progress> */}
      <div id="wrap" className="wrap">
        <Pointer />
        <Header/>
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
