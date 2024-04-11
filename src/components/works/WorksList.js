import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import WorkItem from "./WorkItem";
import style from "./WorksList.module.css";
import useHttp from '../../hooks/use-http'
import { useEffect } from "react";
import NoFound from "./NoFound";
import { getWorks } from "../../utils/firebase-api";
import { worksAction } from "../store/work-slice";

const sortWorks = (works, isAscending) => {
   return works.sort((work1, work2) => {
      if (!isAscending) {
         return work1.id > work2.id ? 1 : -1;
      } else {
         return work1.id < work2.id ? 1 : -1;
      }
   })
}

let isInitislState = false;

const WorksList = () => {
   const histori = useHistory();
   const location = useLocation();
   const dispatchFunction = useDispatch();
   const { sendHttpRequest, status, data: loadedWorks, error } = useHttp(getWorks, true);

   useEffect(() => {
      sendHttpRequest();
   }, [sendHttpRequest]);

   useEffect(() => {
      if (loadedWorks !== null && !isInitislState) {
         console.log(loadedWorks);
         loadedWorks.map(loadWork => (
            dispatchFunction(worksAction.addWork({
               idkey: loadWork.idkey,
               id: loadWork.id,
               title: loadWork.title,
               description: loadWork.description,
               time: loadWork.time
            }))
         ))
         isInitislState = true
      }
   }, [loadedWorks, isInitislState])
   const worksArray = useSelector(state => state.works.worksArray);




   if (status === 'pending') return <div>web app is loading</div>
   if (error) return <p>{error}</p>
   if (status === 'completed' && (!loadedWorks || loadedWorks.length === 0)) return <NoFound />


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
            <button className='button-left' onClick={toggleSortHendler}>
               {isSortAscending ? 'Descending' : 'Ascending'}
            </button>
         </div>
         <ul>
            {sortedWorks.map(work => (
               <WorkItem
                  key={work.id}
                  work={{
                     idkey: work.idkey,
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