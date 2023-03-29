import { Button } from "react-bootstrap";

function Home() {
  return (
    <div className="">
    <div className=""> 
    <h2>Shoshana Dorfman</h2>
    <p>Full-Stack Engineer with a passion for..</p>
    <p>icons</p>
    </div>

    <div className=""> 
    <h1>Skills</h1>
    <ol>
        <li className="">
            <h2>Front-end</h2>
            <span>HTML, CSS, React</span>
        </li>
    </ol>
    </div>

    <div>
    <Button variant="outline-info">View Portfolio</Button>

    </div>

    </div>
  )
}

export default Home;