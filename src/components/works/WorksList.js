import { useSelector } from "react-redux";
import WorkItem from "./WorkItem";
import style from "./WorksList.module.css";

const WorksList = () => {
   const worksArray = useSelector(state => state.works.worksArray)
   return (
      <section className={style.mainContainer}>
         <ul>
            {worksArray.map(work => (
               <WorkItem
                  key={work.id}
                  work={{
                     id: work.id,
                     title: work.title,
                     description: work.description,
                     time: work.time
                  }} />
            ))
            }
         </ul>

      </section>
   );
};

export default WorksList;