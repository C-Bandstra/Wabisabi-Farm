import "./ProduceCard.css";

const ProduceCard = ({ type, special }) => {
  return (
    <section className="produce-card">
      <p className="produce-title">{ type }</p>
      <div className={`${type} time-bar`}></div>
      { special }
    </section>
  );
}

export default ProduceCard;
