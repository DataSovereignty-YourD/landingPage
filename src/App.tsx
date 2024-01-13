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
import { preloadedImageState, imageUrlState } from './state/imageState';
import { useRecoilValue, useSetRecoilState } from "recoil";

function App() {
  const imageUrls = [
    './assets/img/analytics_imac.png',
    './assets/img/dataLeverageImage.png',
    './assets/img/webAuthentication.png',
    './assets/img/paymentMain.png',
    './assets/img/yourdpass-main.png',
  ];
  const location = useLocation();
    // 이미지 URL 설정
    const setImageUrl = useSetRecoilState(imageUrlState);
    useEffect(() => {
      setImageUrl('path/to/your/image.jpg'); // 이미지 URL 설정
    }, [setImageUrl]);
  
    // 이미지 미리 로드
    const preloadedImageUrl = useRecoilValue(preloadedImageState);
    useEffect(() => {
      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        // 필요한 경우 여기서 로드 완료나 오류 처리를 할 수 있습니다.
      });
    }, []);
    
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
        <Route path="/about_us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
      {/* <SideBar /> */}
      {/* <div className="h-[1px] w-full bg-gray-20 items-start"></div> */}
    </React.Fragment>
  );
}

export default App;
