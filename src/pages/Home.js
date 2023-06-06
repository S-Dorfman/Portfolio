// import { Button } from "react-bootstrap";
import '../styles/Home.css';
import photo from '../images/photo.jpg'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';


function Home() {
  return (
    <div className="home">
    <div className="about"> 
    <img className="prof-img" src={photo} alt="Profile" />
    <h2>Shoshana Dorfman</h2>
    <div className='prompt'>
    <p>A Full-Stack Engineer with an  eye for detail, a creative mindset and a
      passion for learning and creating.</p>
      
    <a href="https://github.com/S-Dorfman"><AiOutlineGithub /></a>
      <a href="https://www.linkedin.com/in/shoshana-dorfman-859b161a2/"><AiOutlineLinkedin /></a>
      <a href="mailto:sdorfman.tech@gmail.com"><AiOutlineMail /></a>
    </div>
    </div>
   

    <div className="summary"> 
    <h2>About</h2>
    <p>Shoshana has recently graduated from an immersive Software Engineering program at Per Scholas. The rigorous curriculum covered HTML, CSS, JavaScript, ReactJS and the MERN Stack. Shoshana has applied these skills to creating a portfolio of responsive websites providing solutions to real world problems. 
Shoshana is seeking a position that will utilize her full-stack stack development skills and is also open to opportunities for further learning and expanding her skillset. 
Shoshana has a background in administration in the legal and medical fields. She is a strong communicator, problem solver and is adept at working in fast-paced environments. Coming to technology from a non-traditional background, Shoshana looks forward to bringing her unique perspective to the technology sector.</p>
    <h2>Skills</h2>
    <h3>Front-end</h3>
    <p> ReactJS, HTML, CSS, JavaScript, Bootstrap</p>
    <h3>Back-end</h3>
    <p>MongoDB, Mongoose, ExpressJS, ReactJS, NodeJS </p>
    </div>

    

     {/* todo link does not work on deployed site */}
    {/* <div>
    <Button href="/portfolio" variant="outline-light" style={{backgroundColor: "#CE7777"}}>View Portfolio</Button>
    </div> */}

    </div>
  );
}

export default Home;