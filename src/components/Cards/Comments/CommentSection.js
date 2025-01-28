import { Component } from "react";
import CreateComment from "./CreateComment";
import CommentsItem from "./CommentsItem";

class CommentSection extends Component {
  sub = 0;
  interval;

  comments = [
    { name: "Jojo92", body: "This a cool dog" },
    {
      name: "SvenTheMan",
      body: "This breed is very nice. I will adopt this dog at some point!",
    },
    { name: "User123123", body: "first" },
  ];

  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      comments: this.comments,
      loading: true,
      error: undefined,
      counter: 0,
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   return null;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.comment.length === this.state.comments.length;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   return null;
  // }

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   this.sub += 1;
    //   console.log(this.sub);
    // }, 3000);

    console.log("componentDidMount");
    const apiUrl = "https://jsonplaceholder.typicode.com/comments";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        return response.json();
      })
      .then((data) => {
        const fetchedComments = data.slice(0, 10).map((comment) => ({
          name: comment.name,
          body: comment.body,
        }));

        this.setState({
          comments: fetchedComments,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.comments.length < this.state.comments.length) {
      this.setState({ counter: prevState.counter + 1 });
    }
  }

  addComment = (comment) => {
    this.setState((prevState) => {
      const currentComments = [...prevState.comments];
      currentComments.unshift(comment);

      return { comments: currentComments };
    });
  };

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <CreateComment addComment={this.addComment} />
        <ul>
          {this.state.comments.map((comment, index) => {
            return <CommentsItem key={index} comment={comment} />;
          })}
        </ul>
      </div>
    );
  }
}

export default CommentSection;
