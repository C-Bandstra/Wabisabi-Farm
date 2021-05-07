import './Contact.css';

const Contact = () => {
  return (
    <section id="Contact" className="contact">
      <div className="contact-header-container">
       <h3 className="contact-header">CONTACT US</h3>
        <p className="contact-text">Have questions? Get in touch!</p>
      </div>
      <form className="contact-form">
        <input className="contact-input" placeholder="Name"></input>
        <input className="contact-input" placeholder="Email"></input>
        <input className="contact-input" placeholder="Subject"></input>
        <textarea rows="4" className="contact-input" placeholder="Message"></textarea>
        <button className="contact-btn">Contact Us</button>
      </form>
    </section>
  );
}

export default Contact;
