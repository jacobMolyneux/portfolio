import "./App.css";
import { Homepage } from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResumePage } from "./pages/resume";
import { ProjectPage } from "./pages/ProjectPage";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
      <Nav className="d-flex justify-content-center border-bottom">
        <Nav.Item className="m-3">
          <a href="/">Home</a>
        </Nav.Item>
        <Nav.Item className="m-3">
          <a href="/resume">Resume</a>
        </Nav.Item>
        <Nav.Item className="m-3">
          <a href="/projects">Projects</a>
        </Nav.Item>
      </Nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
