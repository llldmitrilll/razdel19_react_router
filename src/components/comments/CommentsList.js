import CommentItem from "./CommentItem";

const CommentsList = (props) => {
   return (
      <ul>
         {props.comments.map((comment) => (
            <CommentItem key={comment.id} text={comment.text} />
         ))}
      </ul>
   );
};

export default CommentsList;