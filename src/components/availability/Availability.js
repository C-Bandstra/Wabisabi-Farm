import './Availability.css';

const Availability = () => {
  return (
    <div className="availability">
      <p className="availability-header-1">WHAT'S IN SEASON</p>
      <p className="availability-header-2">Wabi Sabi Growth Graph</p>
      <div className="graph-container" >
        <img className="availability-legend" src="/assets/legend.png" />
        <img className="availability-graph" src="/assets/graph-dark.png" />
      </div>
    </div>
  );
}

export default Availability;
