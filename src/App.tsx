import { BusinessPage } from "./pages/businessPage";
import { Routes, Route } from "react-router-dom";
import React from "react";
import StarsCanvas from "./component/canvas/stars";
import MainPage from "./pages/mainPage";
import TopBar from "./component/topBar";
import ExplainYourD from "./pages/explainPage";
import AnimationReal from "./Appppp";
import ContactUs from "./component/contactUs";
import Footer from "./component/footer";
import Blog from "./component/blog";
function App() {
  return (
    <React.Fragment>
      <TopBar />

      {/* <AnimationReal /> */}
      <StarsCanvas />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Business" element={<BusinessPage />} />
        <Route path="/Explain" element={<ExplainYourD />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      {/* <SideBar /> */}
      {/* <div className="h-[1px] w-full bg-gray-20 items-start"></div> */}
    </React.Fragment>
  );
}

export default App;
