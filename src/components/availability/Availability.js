import './Availability.css';
import ProduceCard from "../produceCard/ProduceCard"
import NavBar from "../navbar/NavBar"

const Availability = () => {
  return (
    <div className="availability">
      {/* <NavBar type="nav-2" title=""/> */}
      
      <div className="graph">

        <section className="legend">
          <p className="label">Produce</p>
          <p className="label">JAN</p>
          <p className="label">FEB</p>
          <p className="label">MAR</p>
          <p className="label">APR</p>
          <p className="label">MAY</p>
          <p className="label">JUNE</p>
          <p className="label">JULY</p>
          <p className="label">AUG</p>
          <p className="label">SEPT</p>
          <p className="label">OCT</p>
          <p className="label">NOV</p>
          <p className="label">DEC</p>
        </section>

        <ProduceCard type="arugula" special={<div className="arugula-2 time-bar"></div>}/>
        <ProduceCard />

        
        
      </div>

    </div>
  );
}

export default Availability;
