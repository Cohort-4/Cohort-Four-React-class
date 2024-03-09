const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div className="card">
        <img src={props.cardImage} alt="" />
        <h3>{props.cardTitle}</h3>
        <p>{props.cardDesc}</p>
      </div>
    </div>
  );
};
export default Card;
