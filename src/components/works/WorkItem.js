import { Link, useRouteMatch } from 'react-router-dom';
import style from './WorkItem.module.css';


const WorkItem = ({ work }) => {
   const routeMatch = useRouteMatch()
   // const params = routeMatch.params.workId
   // console.log({ ...routeMatch.params });
   // console.log(params);
   // console.log(`${routeMatch.url}/${params}`);
   // console.log(`/works-list/${work.id}`);
   return (
      <li className={style.workBody}>
         <div className={style.workRow}>
            <h2 className={style.workTitle}><span>{work.id}) </span>{work.title}</h2>
            <p className={style.workTime}>{work.time}</p>
         </div>
         <div className={style.workRow}>
            <p className={style.workDescription}>{work.description}</p>
            <Link className={style.workButton} to={`${routeMatch.url}/${work.id}`}
               id={work.id}
               title={work.title}
               description={work.description}
               time={work.time}>
               Change</Link>
         </div>
      </li>
   );
};

export default WorkItem;