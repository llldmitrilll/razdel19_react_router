import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Card from "../UI/Card";

const NoFound = () => {
   return (
      <Card>
         <h1>Page was not found</h1>
         <Link className='button-center' to='/add-work'>Add work</Link>
      </Card>


   );
};

export default NoFound;