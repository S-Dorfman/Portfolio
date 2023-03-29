import { Card, Button } from "react-bootstrap";

function Portfolio() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Project 1</Card.Title>
        <Card.Text>
          Explanation of project
        </Card.Text>
        <Button variant="primary">View Project</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Portfolio;