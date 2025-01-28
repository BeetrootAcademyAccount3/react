function CommentsItem({ comment }) {
  return (
    <li>
      <h3>{comment.name}</h3>
      <p>{comment.body}</p>
    </li>
  );
}

export default CommentsItem;
