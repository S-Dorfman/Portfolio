import { Card, Button, Row } from "react-bootstrap";
import { projectArr } from "../data/data";

function Portfolio() {

        return(
            <div>
              <h2>Portfolio</h2>
                <Row xs={1} md={2} className="g-4">
            {projectArr.map((element) => {
                console.log(projectArr);
                return(
                    
            <Card style={{width: "16rem"}}>
              <Card.Img src={element.img} variant="top"/>
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.text}</Card.Text>
                <Button variant="primary" href={element.url}>View Project</Button>
              </Card.Body>
            </Card>
            )
        })}
        </Row>
            </div>
        )}
        

export default Portfolio;