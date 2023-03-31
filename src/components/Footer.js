import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';



function Footer() {
  return (
    // TODO make icons a link
    <div className="">
        <div>
          <AiOutlineGithub />
          <AiOutlineLinkedin />
        </div>

        <p> &copy;  2023 Shoshana Dorfman</p>
    </div>
  )
}

export default Footer;