import { BusinessPage } from "./pages/businessPage";
import { Routes, Route } from "react-router-dom";
import React from "react";
import StarsCanvas from "./component/canvas/stars";
import MainPage from "./pages/mainPage";
import TopBar from "./component/topBar";
import ExplainYourD from "./pages/explainPage";
import AnimationReal from "./Appppp";

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <StarsCanvas />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Business" element={<BusinessPage />} />
        <Route path="/Explain" element={<ExplainYourD />} />
      </Routes>
      {/* <SideBar /> */}
      <div className="h-[1px] w-full bg-gray-20 items-start"></div>
      {/* <div className="h-[1px] w-full bg-gray-20 items-start"></div> */}
    </React.Fragment>
  );
}

export default App;
