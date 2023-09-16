import TopNavi from './component/topNavi';
import { BusinessPage } from './pages/businessPage';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import StarsCanvas from './component/canvas/stars';
import SideBar from './component/utils/sideBar';
import MainPage from './pages/mainPage';
import ChangeLang from './component/chageLang';
import useMultipleTranslations from './hooks/useMultileTranslations';
function App() {

  return (
    <React.Fragment>
      <TopNavi />
      <StarsCanvas />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Business" element={<BusinessPage />} />
      </Routes>
      <SideBar />
      <div className="h-[1px] w-full bg-gray-20 items-start"></div>
      <ChangeLang /> {/* 전역 언어 변경 버튼 */}
      {/* <div className="h-[1px] w-full bg-gray-20 items-start"></div> */}
    </React.Fragment>
  );
}

export default App;
