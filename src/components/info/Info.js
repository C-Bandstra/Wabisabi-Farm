import './Info.css';
import '../../index.css';

const Info = () => {
  return (
    <div id="Info" className="info">
      <section className="info-header-container">
        <h4 className="info-header-1">INFO</h4>
        <h5 className="info-header-2">How It Works</h5>
      </section>
      <section class="info-text-container">
        <p className="info-text">Members are encouraged to bring reusable bags to fill with their weekly bounty and leave the box at their respective pick up location.  Each member will be allotted two Farm Share boxes with their seasonal share. If the boxes aren't returned to us to fill up with the next week's harvest, we will supply extra boxes for a small fee and deliver the share.</p>
        <p className="info-text">Wednesday drop sites located at: The Farm, Johnston, Des Moines, Urbandale, West Des Moines and Ankeny.</p>
        <p className="info-text">The 'Regular' Season Share ($28 per week) will run for 20 weeks, as weather permits, (mid-May to the end of September) and will consist of a seasonal harvest every week.  In this share there will be garden staple crops like lettuce, spinach, green beans, potatoes, garlic, tomatoes, peppers, etc as well as some of the more unique vegetables like kohlrabi, heirloom tomatoes, eggplants and more.  Please refer to the produce calendar to see anticipated times of availability for different crops. </p>
        <p className="info-text">The 'Fall' Share ($32/week) will run for 4 weeks (weather permitting) in October.  This share consists of cooler season and/or storage crops like Brussels Sprouts, broccoli, cabbage, kohlrabi, leeks, shallots, garlic, greens, radishes, etc.</p>
        <p className="info-text">An electronic (emailed) weekly newsletter will accompany the share. The newsletter will let members know all the exciting things that happened at Wabi Sabi Farm over the last week, important information about farm events and share changes, storage tips for the weekly harvest, recipes on how to use the share's contents, possibly a few bad vegetable jokes/puns and more!</p>
      </section>
      <button className="join-us-btn">Join Us</button>
    </div>
  );
}

export default Info;
