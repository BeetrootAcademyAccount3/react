import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Component } from "react";

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnonymous: false,
    };
  }

  //Old way
  handleSubmit(event) {
    const newComment = {
      name: this.state.isAnonymous
        ? "Anonymous"
        : event.target.formBasicUsername.value,
      body: event.target.formBasicComment.value,
    };

    this.props.addComment(newComment);

    event.preventDefault();
    event.target.reset();
  }

  //New way
  handleMakeAnonymous = () => {
    this.setState((currentState) => {
      return {
        isAnonymous: !currentState.isAnonymous,
      };
    });

    console.log(this);
    console.log("Make anonymous");
  };

  render() {
    return (
      <Form className="formStyle" onSubmit={this.handleSubmit.bind(this)}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>
            {!this.state.isAnonymous ? "Username" : "Anonymous"}
          </Form.Label>
          {!this.state.isAnonymous && (
            <Form.Control type="text" placeholder="Enter username" />
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicComment">
          <Form.Label>Comment</Form.Label>
          <Form.Control type="text" placeholder="EnterComment" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Make Anonymous"
            onClick={this.handleMakeAnonymous}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default CreateComment;
