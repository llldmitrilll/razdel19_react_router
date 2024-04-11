import { Link, useRouteMatch } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import style from './WorkItem.module.css';
import { delWork } from '../../utils/firebase-api'
import { useDispatch, useSelector } from 'react-redux';
import { worksAction } from '../store/work-slice';


const WorkItem = ({ work }) => {
   const routeMatch = useRouteMatch()
   const dispatchFunction = useDispatch()
   const { sendHttpRequest, status } = useHttp(delWork)
   const worksArray = useSelector(state => state.works.worksArray)
   // const params = routeMatch.params.workId
   // console.log({ ...routeMatch.params });
   // console.log(params);
   // console.log(`${routeMatch.url}/${params}`);
   // console.log(`/works-list/${work.id}`);
   const delWorkHandler = () => {
      sendHttpRequest(work.idkey);
      dispatchFunction(worksAction.removeWork(work.idkey))
      console.log(work.idkey);
      console.log(worksArray);
   }
   return (
      <li className={style.workBody}>
         <div className={style.workRow}>
            <h2 className={style.workTitle}><span>{work.id}) </span>{work.title}</h2>
            <p className={style.workTime}>{work.time}</p>
         </div>
         <div className={style.workRow}>
            <p className={style.workDescription}>{work.description}</p>
            <div>
               <Link className={style.workButton} to={`${routeMatch.url}/${work.id}`}
                  id={work.id}
                  title={work.title}
                  description={work.description}
                  time={work.time}>
                  Change</Link>
               <button className={style.workButtonDel} onClick={delWorkHandler}>Delete</button>
            </div>

         </div>
      </li>
   );
};

export default WorkItem;