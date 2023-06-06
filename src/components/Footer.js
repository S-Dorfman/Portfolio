import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import '../styles/Footer.css'



function Footer() {
  return (
    <div className="footer">
      <div className='socialMedia'>
      <a href="https://github.com/S-Dorfman"><AiOutlineGithub /></a>
      <a href="https://www.linkedin.com/in/shoshana-dorfman-859b161a2/"><AiOutlineLinkedin /></a>
      <a href="mailto:sdorfman.tech@gmail.com"><AiOutlineMail /></a>
      </div>   
          
        <p> &copy;  2023 Shoshana Dorfman</p>
    </div>
  )
}

export default Footer;