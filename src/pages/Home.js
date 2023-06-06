// import { Button } from "react-bootstrap";
import '../styles/Home.css';
import photo from '../images/photo.jpg'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';


function Home() {
  return (
    <div className="home">
    <div className="about"> 
    <img className="prof-img" src={photo} alt="Profile"></img>
    <h2>Shoshana Dorfman</h2>
    <div className='prompt'>
    <p>A Full-Stack Engineer with an  eye for detail, a creative mindset and a
      passion for learning and creating.</p>
      
    <a href="https://github.com/S-Dorfman"><AiOutlineGithub /></a>
      <a href="https://www.linkedin.com/in/shoshana-dorfman-859b161a2/"><AiOutlineLinkedin /></a>
      <a href="mailto:sdorfman.tech@gmail.com"><AiOutlineMail /></a>
    </div>
    </div>
   

    <div className="skills"> 
    <h1>Skills</h1>
    <ol className='list'>
      <li className='item'>
        <h2>Front-end</h2>
        <span>ReactJS, HTML, CSS, Bootstrap, JavaScript</span>
        </li>
      <li className='item'>
        <h2>Back-end</h2>
        <span>Node.js, Express.js, MongoDB, Mongoose </span>
        </li>
      <li className='item'>
        <h2>Other Skills and Tools</h2>
        <span>VS Code, Github, SQL Computer Science Concepts, Data Structures and Algorithms</span>
        </li>
    </ol>
    </div>

     {/* todo link does not work on deployed site */}
    {/* <div>
    <Button href="/portfolio" variant="outline-light" style={{backgroundColor: "#CE7777"}}>View Portfolio</Button>
    </div> */}

    </div>
  );
}

export default Home;