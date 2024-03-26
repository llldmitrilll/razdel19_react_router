import { Fragment } from "react";
import { useParams, Route } from "react-router-dom/cjs/react-router-dom";
import Comments from "../components/comments/Comments";
import { useSelector } from "react-redux";
import HighlightedWork from "../components/works/HighlightedWork";
import Card from "../components/UI/Card";

const WorkDetail = () => {
   const params = useParams();
   const worksArray = useSelector(state => state.works.worksArray);
   const work = worksArray.find(work => work.id === params.workId);
   console.log(params);
   console.log(worksArray);
   console.log(work);
   return (
      <Fragment>
         {work
            ? <HighlightedWork
               id={work.id}
               title={work.title}
               description={work.description}
               time={work.time} />
            : <Card>Work is not found</Card>}
         {/* {work && <HighlightedWork
            id={work.id}
            title={work.title}
            description={work.description}
            time={work.time} />}
         {!work && <Card>Work is not found</Card>} */}
         <Route path='/works/:workId/comments'>
            <Comments />
         </Route>
      </Fragment>
   );
};

export default WorkDetail;