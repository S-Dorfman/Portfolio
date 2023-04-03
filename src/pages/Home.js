import { Button } from "react-bootstrap";
import '../App.css';

function Home() {
  return (
    <div className="home-page">
    <div className=""> 
    <h2>Shoshana Dorfman</h2>
    <p>Full-Stack Engineer with an  eye for detail, a creative mindset and passion for creating dynamic, responsive websites
      that provide a valuable and seamless user experience.</p>
    </div>

    <div className="skills"> 
    <h3>Skills</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>MongoDB </li>
      <li>Mongoose</li>
      <li>React</li>
      <li>SQL Computer Science Concepts Frontend and Backend Frameworks</li>
      <li>Data Structures and Algorithms</li>
    </ul>
    </div>

    <div>
      {/* ?page reloads */}
    <Button href="/portfolio" variant="outline-light" style={{backgroundColor: "#CE7777"}}>View Portfolio</Button>
    </div>

    </div>
  )
}

export default Home;