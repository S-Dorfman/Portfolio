import { Link } from "react-router-dom";
import { Container, Nav, Navbar, } from 'react-bootstrap';


function NavBar() {
  return (
    <>
<Navbar style={{backgroundColor: "#CE7777", marginBottom: "30px"}}  variant="dark">
        <Container>
          <Navbar.Brand style={{fontFamily: "Dancing Script"}} as={Link} to="/">SD</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to='/portfolio'>Portfolio</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/quote'>Quote</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
      </>
         
        // <div className="">
        //     <Link to='/'>Home</Link>
        //     <Link to='/portfolio'>Portfolio</Link>
        //     <Link to='/about'>About</Link>
        //     <Link to='/contact'>Contact</Link>    
        
  )
}

export default NavBar;