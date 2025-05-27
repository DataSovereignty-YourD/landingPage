import React, { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Analytic from './assets/img/analytics_imac.webp';
import D from './assets/img/D.webp';
import Infra from './assets/img/dataLeverageImage.webp';
import Payment from './assets/img/paymentMain.webp';
import LoginImg from './assets/img/webAuthentication.webp';
import YourDStudio from './assets/img/YourDStudio.webp';
import Pass from './assets/img/yourdpass-main.webp';
import StarsCanvas from './components/canvas/stars';
import ContactUs from './components/common/contactUs';
import Footer from './components/common/footer';
import TopBar from './components/common/topBar';
import AppDownloadPage from './components/main/appDownloadPage';
import preloadImages from './components/utils/preloadImages';
import AboutPage from './pages/aboutPage';
import MainPage from './pages/mainPage';
import TermsMain from './pages/policy/TermsMain';
import PricingPage from './pages/product/Pricing';
import YourDAnalyticsPage from './pages/product/yourdAnalayticsPage';
import YourDInfraPage from './pages/product/yourdInfraPage';
import YourDLoginPage from './pages/product/yourdLoginPage';
import YourDPassPage from './pages/product/yourdPassPage';
import YourDPaymentPage from './pages/product/yourdPaymentPage';
import YourDStudioPage from './pages/product/YourDStudioPage';

function Layout() {
    return (
        <React.Fragment>
            <StarsCanvas />
            <TopBar />
            <div className="flex flex-col flex-1 relative">
                <Outlet />
            </div>
            <Footer />
        </React.Fragment>
    );
}


function App() {
    const location = useLocation();

    useEffect(() => {
        preloadImages([Analytic, Payment, D, LoginImg, Pass, Infra, YourDStudio /* 이곳에 다른 이미지 변수를 추가 */]);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="yourd_web_auth" element={<YourDLoginPage />} />
                    <Route path="yourd_studio" element={<YourDStudioPage />} />
                    <Route path="yourd_app" element={<YourDPassPage />} />
                    <Route path="yourd_payment" element={<YourDPaymentPage />} />
                    <Route path="yourd_analytics" element={<YourDAnalyticsPage />} />
                    <Route path="yourd_infra" element={<YourDInfraPage />} />
                    <Route path="about_us" element={<AboutPage />} />
                    <Route path="contact" element={<ContactUs />} />
                    <Route path="pricing" element={<PricingPage />} />
                </Route>


                <Route path="/policy" element={<Navigate to="policy/terms" replace />} />
                <Route path="/policy/privacy" element={<TermsMain />} />
                <Route path="/policy/terms" element={<TermsMain />} />
                <Route path="/app/download" element={<AppDownloadPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
