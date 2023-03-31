import { Button } from "react-bootstrap";
import '../App.css';

function Home() {
  return (
    <div className="home-page">
    <div className=""> 
    <h2>Shoshana Dorfman</h2>
    <p>Full-Stack Engineer with a passion for..</p>
    </div>

    <div className=""> 
    <h1>Skills</h1>
    <ol>
        <li className="">
            <h2>Front-end</h2>
            <span>HTML, CSS, ReactJS</span>
        </li>
    </ol>
    </div>

    <div>
      {/* ?page reloads */}
    <Button href="/portfolio" variant="outline-light" style={{backgroundColor: "#CE7777"}}>View Portfolio</Button>
    </div>

    </div>
  )
}

export default Home;