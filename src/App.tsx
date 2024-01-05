import { Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./pages/mainPage";
import TopBar from "./components/common/topBar";
import AboutPage from "./pages/aboutPage";
import ContactUs from "./components/common/contactUs";
import Blog from "./components/blog/blog";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import YourDLoginPage from "./pages/product/yourdLoginPage";
import YourDPassPage from "./pages/product/yourdPassPage";
import YourDAnalyticsPage from "./pages/product/yourdAnalayticsPage";
import YourDInfraPage from "./pages/product/yourdInfraPage";
import YourDPaymentPage from "./pages/product/yourdPaymentPage";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <React.Fragment>
      <TopBar />
      {/* <AnimationReal /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/yourd_web_auth" element={<YourDLoginPage />} />
        <Route path="/yourd_pass" element={<YourDPassPage />} />
        <Route path="/yourd_payment" element={<YourDPaymentPage />} />
        <Route path="/yourd_analytics" element={<YourDAnalyticsPage />} />
        <Route path="/yourd_infra" element={<YourDInfraPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <SideBar /> */}
      {/* <div className="h-[1px] w-full bg-gray-20 items-start"></div> */}
    </React.Fragment>
  );
}

export default App;
