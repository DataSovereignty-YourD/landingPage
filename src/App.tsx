import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainPage from './pages/mainPage';
import TopBar from './components/common/topBar';
import AboutPage from './pages/aboutPage';
import ContactUs from './components/common/contactUs';
import YourDLoginPage from './pages/product/yourdLoginPage';
import YourDPassPage from './pages/product/yourdPassPage';
import YourDAnalyticsPage from './pages/product/yourdAnalayticsPage';
import YourDInfraPage from './pages/product/yourdInfraPage';
import YourDPaymentPage from './pages/product/yourdPaymentPage';
import preloadImages from './components/utils/preloadImages';
import Analytic from './assets/img/analytics_imac.webp';
import Payment from './assets/img/paymentMain.webp';
import D from './assets/img/D.webp';
import LoginImg from './assets/img/webAuthentication.webp';
import Pass from './assets/img/yourdpass-main.webp';
import Infra from './assets/img/dataLeverageImage.webp';
import KbwModal from './components/common/popup';

function App() {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
    const [isCookieSet, setIsCookieSet] = useState(false); // 쿠키 상태 확인용
    const location = useLocation();
    const septemberEnd = new Date(2024, 8, 30, 23, 59, 59); // 2024년 9월 30일 자정

    const handleCloseModal = (e: React.MouseEvent | boolean) => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        preloadImages([Analytic, Payment, D, LoginImg, Pass, Infra /* 이곳에 다른 이미지 변수를 추가 */]);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const fetchCookies = async () => {
            try {
                const response = await fetch('https://uniauth.yourd.xyz/issueCookies', {
                    method: 'GET',
                    credentials: 'include', // 쿠키를 포함하여 요청
                });

                if (response.ok) {
                    console.log('Cookies successfully set by the server.');
                    setIsCookieSet(true); // 쿠키 설정 성공 상태
                } else {
                    console.error('Failed to set cookies:', response.status);
                }
            } catch (error) {
                console.error('Error while fetching cookies:', error);
            }
        };

        fetchCookies(); // 쿠키 요청
    }, []);

    return (
        <React.Fragment>
            <TopBar />
            <KbwModal visible={isModalVisible} onClose={handleCloseModal} expiryDate={septemberEnd} />
            {/* <AnimationReal /> */}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/yourd_web_auth" element={<YourDLoginPage />} />
                <Route path="/yourd_app" element={<YourDPassPage />} />
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
