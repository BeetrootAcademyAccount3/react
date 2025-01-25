import { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import CommentSection from "./CommentSection";

class DogDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={6} md={6}>
              <Image src="https://picsum.photos/id/237/200/300" rounded />
            </Col>
            <Col xs={6} md={6}>
              <h2>Name: {this.props.selectedDog.name}</h2>
              <p>Age: {this.props.selectedDog.age}</p>
              <p>Description:{this.props.selectedDog.description}</p>
            </Col>
          </Row>
        </Container>
        <CommentSection />
      </div>
    );
  }
}

export default DogDetails;
