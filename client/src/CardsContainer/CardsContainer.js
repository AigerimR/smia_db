import classes from './CardsContainer.module.scss';

function CardsContainer(props) {
  const apiList = props.data;

  const card = apiList?.map((el) => {
    return (
      <div className={classes.cards_card} key={el.Link}>
        <h2>{el.API}</h2>
        <p>{el.Description}</p>
        <a href={el.Link} target='blank'>Link to API</a>
        <h5>Category: {el.Category}</h5>
      </div>
    );
  });

  return (
    <div className={classes.cards_container}>
      {card}
    </div>
    
  );
}

export default CardsContainer;
