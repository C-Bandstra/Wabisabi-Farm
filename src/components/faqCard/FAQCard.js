import './FAQCard.css';
import { useState } from 'react'

const FAQCard = ({ question, answer }) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!isOpen);

  return (
    <section onClick={toggle} className={`faq-card ${isOpen ? "active" : ""}`}>

      <div className="wrapper">
        <p className="question">{question}</p>
        <img alt="Arrow which determines open or closed state" src="/assets/open.png" className={`open-icon ${isOpen ? "active" : ""}`}/>
      </div>

      <p className={`answer ${isOpen ? "active" : ""}`}>{answer}</p>
    </section>
  );
}

export default FAQCard;
