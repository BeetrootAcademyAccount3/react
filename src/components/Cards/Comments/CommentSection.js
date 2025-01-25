import { Component } from "react";
import CreateComment from "./CreateComment";

class CommentSection extends Component {
  comments = [
    { user: "Jojo92", body: "This a cool dog" },
    {
      user: "SvenTheMan",
      body: "This breed is very nice. I will adopt this dog at some point!",
    },
    { user: "User123123", body: "first" },
  ];

  constructor(props) {
    super(props);
    this.state = {
      comments: this.comments,
    };
  }

  addComment = (comment) => {
    console.log(this);
    this.setState((prevState) => ({
      comments: [comment],
    }));
  };

  render() {
    return (
      <div>
        <CreateComment addComment={this.addComment} />
        <ul>
          {this.state.comments.map((comment, index) => {
            return (
              <li key={index}>
                <h3>{comment.user}</h3>
                <p>{comment.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentSection;
