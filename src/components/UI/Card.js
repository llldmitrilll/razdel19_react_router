import style from './Card.module.css';

const Card = (props) => {
   return (
      <section className={style.card}>
         {props.children}
      </section>
   );
};

export default Card;