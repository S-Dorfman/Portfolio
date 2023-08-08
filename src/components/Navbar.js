import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../styles/Navbar.css'


function NavBar() {
  return (
    <>
<Navbar style={{backgroundColor: "#072a58"}} variant="dark" sticky="top">
        <Container>
          <Navbar.Brand style={{fontFamily: "Dancing Script", fontSize: "30px", color: "#83eba2"}} as={Link} to="/">SD</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link style={{color: "#83eba2"}} as={Link} to="/">Home</Nav.Link>
            <Nav.Link style={{color: "#83eba2"}} as={Link} to='/portfolio'>Portfolio</Nav.Link>
            {/* <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>  */}
          </Nav>
        </Container>
      </Navbar>
      </>

        
  )
}

export default NavBar;



 // <div className="">
        //     <Link to='/'>Home</Link>
        //     <Link to='/portfolio'>Portfolio</Link>
        //     <Link to='/about'>About</Link>
        //     <Link to='/contact'>Contact</Link> 