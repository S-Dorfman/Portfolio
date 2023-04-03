import { Button } from "react-bootstrap";
import '../App.css';

function Home() {
  return (
    <div className="home-page">
    <div className=""> 
    <h2>Shoshana Dorfman</h2>
    <p>Full-Stack Engineer with an  eye for detail, creative mindset and passion for creating dynamic, responsive websites
      that provide a seamless user experience.</p>
    </div>

    <div className="skills"> 
    <h1>Skills</h1>
    <h2>HTML | CSS | JavaScript | Node.js | Express.js | MongoDB | Mongoose | React | SQL Computer Science Concepts Frontend and Backend Frameworks | Data Structures and Algorithms</h2>
    </div>

    <div>
      {/* ?page reloads */}
    <Button href="/portfolio" variant="outline-light" style={{backgroundColor: "#CE7777"}}>View Portfolio</Button>
    </div>

    </div>
  )
}

export default Home;