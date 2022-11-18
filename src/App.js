import "./App.css";
import "./style.css";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Challenges from "./views/Challenges";
import NotFound from "./views/NotFound";
import { Routes, Route, use } from "react-router-dom";

function App() {
  return (
    <main className="raleway">
      <Navbar />

      <div className='text-center'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/challenges/*" element={<Challenges />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main >
  );
}

export default App;
