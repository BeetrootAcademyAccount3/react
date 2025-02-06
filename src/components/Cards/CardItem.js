import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./CardItem.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../Home";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardItem({ dog, adoptDog, selectDogDetails }) {
  const values = [];

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
        <Button variant="primary">Adopt</Button>
        <Link to={`${dog.id}`}>
          <Button variant="secondary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
