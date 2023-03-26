// import { Routes, Route } from "react-router-dom";
// import HorizontalScroll from "./components/HorizontalScroll";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import './scss/Style.scss';

function App() {
  // const scrollRef = HorizontalScroll();

  return (
    <>
      {/* <div className="wrap" ref={scrollRef}> */}
      <div className="wrap">
        <Header />
        <MainPage />
        {/* <Routes>

        </Routes> */}
      </div>
    </>
  );
}

export default App;
