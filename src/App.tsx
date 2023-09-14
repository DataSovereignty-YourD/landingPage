

import TopNavi from "./component/topNavi";
import { ScrollSection } from "./pages/scrollsection";
import { BusinessPage } from "./pages/BusinessPage";
import { Routes, Route } from "react-router-dom";
import React from "react";
import StarsCanvas from "./component/canvas/Stars";
import SideBar from "./component/sideBar";
import MainPage from "./pages/MainPage"; 
function App() {
  return (
    <React.Fragment>
      <TopNavi />
      <StarsCanvas />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/past" element={<ScrollSection />} />
        <Route path="/Business" element={<BusinessPage />} />
      </Routes>
      <SideBar />
      <div className="h-[1px] w-full bg-gray-20 items-start"></div>

      {/* <div className="h-[1px] w-full bg-gray-20 items-start"></div> */}
    </React.Fragment>
  );
}

export default App;
