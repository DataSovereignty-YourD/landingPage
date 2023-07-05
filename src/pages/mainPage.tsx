import { Route, Routes } from "react-router-dom";
import DetailPage from "./detailPage";
import FAQPage from "./FAQPage";
import FirstPage from "./FirstPage";
import TopNavi from "../component/topNavi";

export default function MainPage() {
  return (
    <div className="app">
      <TopNavi />
    </div>
  );
}
