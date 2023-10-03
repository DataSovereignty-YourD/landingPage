import { Routes, Route } from 'react-router-dom';
import React from 'react';
import StarsCanvas from './components/canvas/stars';
import MainPage from './pages/mainPage';
import TopBar from './components/common/topBar';
import AboutPage from './pages/aboutPage';
import ContactUs from './components/common/contactUs';
import Blog from './components/blog/blog';
import ProductPage from './pages/productPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import YourDLoginPage from './pages/product/yourdLoginPage';
import YourDPassPage from './pages/product/yourdPassPage';
import YourDAnalyticsPage from './pages/product/yourdAnalayticsPage';
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <React.Fragment>
      <TopBar />
      {/* <AnimationReal /> */}
      <StarsCanvas />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/yourd_login" element={<YourDLoginPage />} />
        <Route path="/yourd_pass" element={<YourDPassPage />} />
        <Route path="/yourd_analytics" element={<YourDAnalyticsPage />} />
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
