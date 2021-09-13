import './FAQ.css';
import FAQCard from "../faqCard/FAQCard"

const FAQ = () => {
  return (
    <div className="faq">
      <p className="faq-header">Frequently Asked Questions</p>
      <FAQCard 
        question="Is the Farm/Food Certified Organic?"
        answer="Yes, we are USDA Certified Organic and our inspection agency 
        is the Iowa Department of Agriculture and Land Stewardship (IDALS).  
        Our farm ground has been Certified Organic for over 18 years.  We do 
        have partner farms we work with that are not Certified Organic and 
        we always are very clear and transparent about that!"
      />
      <FAQCard 
        question="Can I split a share?"
        answer="You are welcome to share your weekly/bi-weekly bounty.  We are not able to divide produce up at the farm, so it is your responsibility to divide up produce."
      />
      <FAQCard 
        question="What is the difference between a Full Share and a Half Share?"
        answer="A Full Share is a weekly box of produce and a Half Share is filled just like a Full Share but is delivered every other week."
      />
      <FAQCard 
        question="What are the pick up times at the drop sites?"
        answer="The pick up times at all our drop sites in the Des Moines Metro is 4:30 pm till 6pm.  Farm Pick Up begins at 3pm till around 8pm."
      />
      <FAQCard 
        question="Are there payment plans available?"
        answer="While we would appreciate full payment at time of sign up, there is a payment plan available.  25% due at signup, 25% due when first share delivered and the remaining 50% equally divided up throughout the season."
      />
    </div>
  );
}

export default FAQ;
