import { Card, Button } from "react-bootstrap";
import { projectArr } from "../data/data";

function Portfolio() {
    return (
        <>
    {projectArr.map((element) => {
        console.log(projectArr);
        return(
    <Card style={{ width: '16rem' }}>
      <Card.Img src={element.img} variant="top"/>
      <Card.Body>
        <Card.Title>{element.title}</Card.Title>
        <Card.Text>{element.text}</Card.Text>
        <Button variant="primary" href={element.url}>View Project</Button>
      </Card.Body>
    </Card>
    )
    })}
    </>
    
)}

export default Portfolio;