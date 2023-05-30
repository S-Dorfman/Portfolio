// import { Button } from "react-bootstrap";
// import Portfolio from "./Portfolio";
import '../App.css';
import photo from '../images/photo.jpg'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';


function Home() {
  return (
    <div className="home-page">
    <div className=""> 
    <img src={photo} alt="Shoshana"></img>
    <h2>Shoshana Dorfman</h2>
    <div className='home-icons'>
    <h3>Full-Stack Engineer with an  eye for detail, a creative mindset and 
      passion for creating dynamic, responsive websites
      that provide a valuable and seamless user experience.</h3>
    </div>

    <a href="https://github.com/S-Dorfman"><AiOutlineGithub size='2.5rem' /></a>
      <a href="https://www.linkedin.com/in/shoshana-dorfman-859b161a2/"><AiOutlineLinkedin size='2.5rem'/></a>
      <a href="mailto:sdorfman.tech@gmail.com"><AiOutlineMail size='2.5rem'/></a>
    </div>
    
    <br /> 

    <div className="skills"> 
    <h3>Skills:</h3>
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

     {/* todo link does not work on deployed site */}
    {/* <div>
    <Button href="/portfolio" variant="outline-light" style={{backgroundColor: "#CE7777"}}>View Portfolio</Button>
    </div> */}

    </div>
  )
}

export default Home;