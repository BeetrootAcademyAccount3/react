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
          <li
            className={
              darkTheme ? styles.commentItemDark : styles.commentItemLight
            }
          >
            <h3>{this.props.comment.name}</h3>
            <p>{this.props.comment.body}</p>
          </li>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default CommentsItem;
