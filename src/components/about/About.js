import './About.css';
import Header from '../header/Header'

const About = () => {
  return (
    <div className="about">
      <Header h1="ABOUT US" h2="Who We Are" />
      <section className="text-container">
        <p className="about-text">We are a Certified Organic Fruit, Vegetable,
          Herb and Transplant Farm located about 20 miles
          NW of Des Moines in Granger, Iowa.  2021 will be
          our 9th year growing the high quality, nutrient
          dense, USDA Certified Organic AND Local produce
          and plants to Central Iowa!  One heated greenhouse
          and 2 HIGH tunnels help us prolong the season and
          provide food and garden plants to our community
          through Customizable Farm Shares, the Des Moines
          Farmers' Market, Restaurants and an On Farm Stand.
        </p>
        <p className="about-text">Our mission is to grow tasty, nutritious, Certified
          Organic (IDALS) fruits, vegetables, herbs and garden
          transplants available to all members of the community
          in the most environmentally, physically and economically 
          sustainable way.
        </p>
      </section>
    </div>
  );
}

export default About;
