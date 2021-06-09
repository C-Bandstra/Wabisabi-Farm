import './Contact.css';
import Form from './Form'

const Contact = () => {
  return (
    <section id="Contact" className="contact">
      <div className="contact-header-container">
       <h3 className="contact-header">CONTACT US</h3>
        <p className="contact-text">Have questions? Get in touch!</p>
      </div>
      <Form />
    </section>
  );
}

export default Contact;
