import "./App.css";
import DetailPage from "./pages/detailPage";

import FAQPage from "./pages/FAQPage";
import MainPage from "./pages/mainPage";
import TopNavi from "./component/topNavi";
import YourDIntroPage from "./pages/yourdIntroPage";
import CarouselExample from "./pages/test";
import Footer from "./component/footer";

function App() {
  return (
    <div>
      <TopNavi />
      <MainPage />
      <YourDIntroPage />
      <DetailPage />
      <FAQPage />
      <Footer />
    </div>
  );
}

export default App;
