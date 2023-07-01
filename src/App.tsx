import "./App.css";

import FAQPage from "./pages/FAQPage";
import MainPage from "./pages/mainPage";
import TopNavi from "./pages/topNavi";
import YourDIntroPage from "./pages/yourdIntroPage";

function App() {
  return (
    <div>
      <TopNavi />
      <MainPage />
      <YourDIntroPage />
      <FAQPage />
    </div>
  );
}

export default App;
