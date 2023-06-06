import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
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
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
