import Card from '../UI/Card';
import style from './WorkForm.module.css';
import { useHistory, Prompt } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { worksAction } from '../store/work-slice';
import { useState } from 'react';
import { Fragment } from 'react';
import useHttp from '../../hooks/use-http';
import { addWork } from '../../utils/firebase-api';
import { getWork } from '../../utils/firebase-api';

const WorkForm = () => {
   const [isFormFocus, setIsFormFocus] = useState(false)
   const titleRef = useRef();
   const descriptionRef = useRef();
   const timeRef = useRef();
   const dispatchFunction = useDispatch();
   const histoty = useHistory();
   const worksQuantity = useSelector(state => state.works.worksQuantity)
   const { sendHttpRequest, status: statusAddWork } = useHttp(addWork)
   const { sendHttpRequest: sendHtttpGetRequest, status: statusGetWork, data: loadWork, error } = useHttp(getWork, true)

   useEffect(() => {
      if (statusAddWork === 'completed') {
         sendHtttpGetRequest(String(worksQuantity + 1));
         histoty.push('/works-list');
      }
   }, [statusAddWork])

   useEffect(() => {
      if (statusGetWork === 'complet ed') {
         dispatchFunction(worksAction.addWork(loadWork))
      }
   }, [statusGetWork, loadWork])

   const submitHandler = (event) => {
      event.preventDefault();

      sendHttpRequest({
         id: String(worksQuantity + 1),
         title: titleRef.current.value,
         description: descriptionRef.current.value,
         time: timeRef.current.value
      })
   }

   const focusFormHandler = () => {
      setIsFormFocus(true);
   }

   const sendDataHandler = () => {
      setIsFormFocus(false);
   }

   return (
      <Fragment>
         <Prompt when={isFormFocus} message={(location) => "Do you close page"} />
         <Card>
            <form onFocus={focusFormHandler} onSubmit={submitHandler} className={style.form}>
               <div className={style.formBlock}>
                  <label className={style.label} htmlFor='title'>Title</label>
                  <input className={style.input} id='title' name='title' type='text' ref={titleRef} />
               </div>
               <div className={style.formBlock}>
                  <label className={style.label} htmlFor='description'>Description</label>
                  <textarea className={style.input} id='description' name='description' rows='5' type='text' ref={descriptionRef} />
               </div>
               <div className={style.formBlock}>
                  <label className={style.label} htmlFor='time'>Time</label>
                  <input className={style.input} id='time' name='time' maxLength='4' type='number' placeholder='00:00' ref={timeRef} />
               </div>
               <button className='button-center' onClick={sendDataHandler}>Add work</button>
            </form>
         </Card>
      </Fragment>


   );
};

export default WorkForm;