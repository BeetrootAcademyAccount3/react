import { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import CommentSection from "./CommentSection";
import { dogs } from "../CardList";
import { useParams } from "react-router-dom";

function DogDetails() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={6}>
            <Image src="https://picsum.photos/id/237/200/300" rounded />
          </Col>
          <Col xs={6} md={6}>
            <h2>Name: {dogs[params.id].name}</h2>
            <p>Age: {dogs[params.id].age}</p>
            <p>Description:{dogs[params.id].description}</p>
          </Col>
        </Row>
      </Container>
      <CommentSection />
    </div>
  );
}

export default DogDetails;
