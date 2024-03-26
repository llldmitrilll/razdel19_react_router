import Card from "../UI/Card";

const HighlightedWork = (props) => {
   return (
      <Card>
         <p>{props.id}) {props.title}</p>
         <p>{props.description}</p>
         <p>{props.time}</p>
      </Card>
   );
};

export default HighlightedWork;