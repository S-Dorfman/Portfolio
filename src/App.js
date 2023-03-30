import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
