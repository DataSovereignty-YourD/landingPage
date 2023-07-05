import "./App.css";
import DetailPage from "./pages/detailPage";

import FAQPage from "./pages/FAQPage";
import MainPage from "./pages/mainPage";
import TopNavi from "./component/topNavi";
import YourDIntroPage from "./pages/yourdIntroPage";
import Footer from "./component/footer";
import FirstPage from "./pages/FirstPage";
import NoVideoPage from "./pages/Novideopage";

function App() {
  return (
    <div>
      <TopNavi />
      <FirstPage />
      <YourDIntroPage />
      {/* <DetailPage /> */}
      {/* <NoVideoPage /> */}
      <FAQPage />
      <Footer />
    </div>
  );
}

export default App;
