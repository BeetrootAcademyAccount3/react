import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./CardItem.module.scss";
import { ThemeContext } from "../Home";

function CardItem({ dog, adoptDog, selectDogDetails }) {
  const darkTheme = useContext(ThemeContext);

  function handleAdoption() {
    adoptDog(dog.id);
  }

  function handleSelectDogDetails() {
    selectDogDetails(dog.id);
  }

  return (
    <Card className={darkTheme ? styles.dogItemDark : styles.dogItemLight}>
      <Card.Img variant="top" src="https://picsum.photos/id/237/200/300" />
      <Card.Body>
        <Card.Title>{dog.name}</Card.Title>
        <Card.Text>{dog.desc}</Card.Text>
        <Button variant="primary" onClick={handleAdoption}>
          Adopt
        </Button>
        <Button variant="secondary" onClick={handleSelectDogDetails}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
