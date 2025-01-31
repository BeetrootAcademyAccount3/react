import { Component } from "react";
import { ThemeContext } from "../../Home";
import styles from "./CommentsItem.module.scss";

class CommentsItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => (
          <div
            className={
              darkTheme ? styles.commentItemDark : styles.commentItemLight
            }
          >
            <h2>{this.props.comment.name}</h2>
            <p>{this.props.comment.body}</p>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default CommentsItem;
