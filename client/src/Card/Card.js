import classes from './Card.module.scss';

function Card() {
  return (
    <div className={classes.main}>
      <h2>Name</h2>
      <p>Description</p>
      <a>Link</a>
      <h6>Category</h6>
    </div>
  );
}

export default Card;
