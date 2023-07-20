import "./App.css";
import DetailPage from "./pages/detailPage";

import FAQPage from "./pages/FAQPage";
import MainPage from "./pages/mainPage";
import TopNavi from "./component/topNavi";
import YourDIntroPage from "./pages/yourdIntroPage";
import Footer from "./component/footer";
import FirstPage from "./pages/FirstPage";
import NoVideoPage from "./pages/Novideopage";
import RoadMapPage from "./pages/roadmapPage";
import { ControlPage } from "./pages/controlPage";
import { Test } from "./pages/test";
import { ScrollSection } from "./pages/scrollsection";

function App() {
  return (
    <div>
      <TopNavi />
      <ScrollSection />
      <Footer />
    </div>
  );
}

export default App;
