import { Card, Button, Row } from "react-bootstrap";
import { projectArr } from "../data/data";
import Quote from "../components/Quote";
import '../styles/Portfolio.css'

function Portfolio() {

        return(
            <div className="portfolio">
              <h2>Portfolio</h2>
              <br />
                <Row xs={1} md={2} className="g-4">
            {projectArr.map((element) => {
                console.log(projectArr);
                return(
                    
            <Card style={{width: "16rem"}}>
              <Card.Img variant="top" src={element.img} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.text}</Card.Text>
                <Button style={{backgroundColor: "#669BBC"}}  variant="light" href={element.url}>View Project</Button>
                {/* <Button style={{backgroundColor: "#669BBC"}}  variant="light" href={element.url}>View Code</Button> */}
              </Card.Body>
            </Card>
            )
        })}
        </Row>
        <br />
          <Quote />
            </div>
        )}
        

export default Portfolio;