import "./App.css";
import "./style.css";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Challenges from "./views/Challenges";
import NotFound from "./views/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="raleway min-vh-100 vw-100 d-flex flex-column">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/challenges/*" element={<Challenges />} />
      </Routes>
    </div >
  );
}

export default App;
