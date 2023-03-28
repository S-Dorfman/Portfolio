import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
     <h1>Shoshana Dorfman</h1>
     <h2>Full-Stack Engineer</h2>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
