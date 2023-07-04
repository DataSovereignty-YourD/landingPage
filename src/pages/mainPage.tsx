import { Route, Routes } from "react-router-dom";
import DetailPage from "./detailPage";
import FAQPage from "./FAQPage";
import FirstPage from "./FirstPage";
import TopNavi from "../component/topNavi";

export default function MainPage() {
  return (
    <div className="app">
      <TopNavi />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Solution" element={<DetailPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
      </Routes>
    </div>
  );
}
