import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useHttp from "../../hooks/use-http";
import { getComments } from "../../utils/firebase-api";
import Card from "../UI/Card";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
   const [isAddingComment, setIsAddingComment] = useState(false);
   const params = useParams();
   const { workId } = params;

   const { sendHttpRequest, status, data: loadedComments } = useHttp(getComments);
   useEffect(() => {
      sendHttpRequest(workId);
   }, [sendHttpRequest, workId])

   const addCommetHandler = () => {
      setIsAddingComment(true);
   }

   const commentAddedHandler = useCallback(() => {
      sendHttpRequest(workId);
   }, [workId, sendHttpRequest])

   let comments;
   if (status === 'pending') comments = <div>Comments Loading</div>
   if (status === 'completed' && (loadedComments && loadedComments.length > 0)) comments = <CommentsList comments={loadedComments} />
   if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) comments = <p>Thes work doesn't have comments</p>

   return (
      <Card>
         <h2>Comments</h2>
         {!isAddingComment && (
            <button className="button-center" onClick={addCommetHandler}>Add a Comment</button>
         )}
         {isAddingComment && <NewCommentForm workId={params.workId} onCommentAdded={commentAddedHandler} />}
         {comments}
      </Card>
   );
};

export default Comments;