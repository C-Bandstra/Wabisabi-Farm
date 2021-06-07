import './Availability.css';

const Availability = () => {
  return (
    <div className="availability">
      <h4 className="availability-header-1">WHAT'S IN SEASON</h4>
      <h5 className="availability-header-2">Food Availaibility Charts</h5>
      <div className="graph-container" >
        <img className="availability-legend" src="/assets/legend.png" />
        <img className="availability-graph" src="/assets/graph.png" />
      </div>
    </div>
  );
}

export default Availability;
