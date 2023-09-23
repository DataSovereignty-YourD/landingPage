import { Routes, Route } from "react-router-dom";
import React from "react";
// import { BusinessPage } from "./pages/businessPage";
import StarsCanvas from "./component/canvas/stars";
import MainPage from "./pages/mainPage";
import TopBar from "./component/topBar";
import AboutPage from "./pages/aboutPage";
import AnimationReal from "./Appppp";
import ContactUs from "./component/contactUs";
import Footer from "./component/footer";
import Blog from "./component/blog";
import ProductPage from "./pages/productPage";
function App() {
  return (
    <React.Fragment>
      <TopBar />

      {/* <AnimationReal /> */}
      <StarsCanvas />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/Business" element={<BusinessPage />} /> */}
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      {/* <SideBar /> */}
      {/* <div className="h-[1px] w-full bg-gray-20 items-start"></div> */}
    </React.Fragment>
  );
}

export default App;
