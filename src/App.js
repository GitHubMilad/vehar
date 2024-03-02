import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import Politic from "./pages/politic/Politic";
import Sport from "./pages/sport/Sport";
import Local from "./pages/local/Local";
import About from "./pages/about/About";
import Social from "./pages/social/Social";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/politic" element={<Politic />} />
        <Route path="/social" element={<Social />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/local" element={<Local />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
