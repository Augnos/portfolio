import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Challenges from "./views/Challenges";
import Contact from "./views/Contact";
import { Routes, Route, use } from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="raleway">
      <Navbar />
      
      <Container fluid className='bg-dark bg-gradient text-light vh-fill text-center'>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Skills />} path="/skills" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Challenges />} path="/challenges" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
