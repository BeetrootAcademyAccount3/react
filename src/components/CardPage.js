import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardPage({ dogName, desc }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://picsum.photos/id/237/200/300
"
      />
      <Card.Body>
        <Card.Title>{dogName}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">Adopt</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPage;
