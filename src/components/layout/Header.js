import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
   const worksQuantity = useSelector(state => state.works.worksQuantity)
   return (
      <header className={style.header}>
         <div className={style.headerContainer}>
            <nav>
               <ul className={style.headerList}>
                  <li>
                     <NavLink to='/works' activeClassName={style.headerLinkActive}>
                        Works <span className={style.headerWorksQuantity}>{worksQuantity}</span></NavLink>
                  </li>
                  <li>
                     <NavLink to='/add-work' activeClassName={style.headerLinkActive}> Add work </NavLink>
                  </li>
               </ul>
            </nav>
         </div>
      </header>



   );
};

export default Header;