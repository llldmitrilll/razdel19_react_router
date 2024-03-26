import { Fragment } from 'react';
import WorksList from '../works/WorksList';
import Header from './Header';
import style from './Layout.module.css';

const Layout = (props) => {
   return (
      <Fragment >
         <Header />
         <main className={style.main}> {props.children}</main>
         {/* <main> <WorksList /></main> */}
      </Fragment>
   );
};

export default Layout;