import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';



function Footer() {
  return (
    // TODO make icons a link
    <div className="Footer">
      <a href="https://github.com/S-Dorfman"><AiOutlineGithub size='1.5rem' /></a>
      <a href="https://www.linkedin.com/in/shoshana-dorfman-859b161a2/"><AiOutlineLinkedin size='1.5rem'/></a>
      <a href="mailto:sdorfman.tech@gmail.com"><AiOutlineMail size='1.5rem'/></a>
          
          
          


        <p> &copy;  2023 Shoshana Dorfman</p>
    </div>
  )
}

export default Footer;