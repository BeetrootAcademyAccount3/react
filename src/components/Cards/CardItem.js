import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./CardItem.module.scss";

function CardItem({ dog }) {
  function handleAdoption() {
    //console.log(`${dog.name} with id: ${dog.id} is Adopted`);
  }

  return (
    <Card className={styles.dogCard}>
      <Card.Img variant="top" src="https://picsum.photos/id/237/200/300" />
      <Card.Body>
        <Card.Title>{dog.name}</Card.Title>
        <Card.Text>{dog.desc}</Card.Text>
        <Button variant="primary" onClick={handleAdoption}>
          Adopt
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
