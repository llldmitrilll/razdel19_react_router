import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import WorkItem from "./WorkItem";
import style from "./WorksList.module.css";

const sortWorks = (works, isAscending) => {
   return works.sort((work1, work2) => {
      if (!isAscending) {
         return Number(work1.id) > Number(work2.id) ? 1 : -1;
      } else {
         return Number(work1.id) < Number(work2.id) ? 1 : -1;
      }
   })
}

const WorksList = () => {
   const histori = useHistory();
   const location = useLocation();
   const worksArray = useSelector(state => state.works.worksArray);
   // console.log(location);
   const queryParams = new URLSearchParams(location.search);
   // console.log(queryParams.get('sort'));
   const sortingOrder = queryParams.get('sort');
   const isSortAscending = sortingOrder === 'asc';
   const sortedWorks = sortWorks([...worksArray], isSortAscending);
   // console.log([...worksArray]);
   // console.log(worksArray);

   const toggleSortHendler = () => {
      histori.push(`${location.pathname}?sort=` + (isSortAscending ? 'desc' : 'asc'));
   }
   return (
      <section className={style.mainContainer}>
         <div>
            <button onClick={toggleSortHendler}>
               {isSortAscending ? 'Descending' : 'Ascending'}
            </button>
         </div>
         <ul>
            {sortedWorks.map(work => (
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