import { useEffect } from "react";
import { useRef } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../utils/firebase-api";

const NewCommentForm = (props) => {
   const commentTextRef = useRef();
   const { sendHttpRequest, status, error } = useHttp(addComment);
   const { onCommentAdded } = props;

   useEffect(() => {
      if (status === 'completed' && !error) onCommentAdded();
   }, [status, error, onCommentAdded]);

   const submitCommentHandler = (event) => {
      event.preventDefault();
      sendHttpRequest({ commentData: { text: commentTextRef.current.value }, workId: props.workId })
   }

   return (

      <form onSubmit={submitCommentHandler}>
         {status === 'pending' && <div>This loading commets</div>}
         <div>
            <label htmlFor="comment">Text Comment</label>
            <textarea id="comment" rows='5' ref={commentTextRef} />
         </div>
         <div>
            <button className="button-center">Add Comment</button>
         </div>
      </form>
   );
};

export default NewCommentForm;