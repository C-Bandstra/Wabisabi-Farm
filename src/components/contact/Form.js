import React, { useRef } from "react";
import emailjs, { init } from 'emailjs-com'

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6fwg831', 'contact_form', form.current, init("user_0VcUZrsMJ5pqKELU1Q6Vm"))
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    

    alert("Thanks for reaching out!");

    const inputs = document.querySelectorAll(".input-placeholder");
    inputs.forEach(input => {
      input.value = "";
      input.classList.remove("input-placeholder")
    })
    
  };

  const applyStyling = (e) => {
    if(!e.target.classList.contains("input-placeholder")) {
      e.target.classList.add("input-placeholder")
    }
  }

  return (
    <form ref={form} id="form" className="contact-form" onSubmit={sendEmail}>
        <input onClick={(e) => applyStyling(e)} className="contact-input" placeholder="Name" name="user_name" required></input>
        <input onClick={(e) => applyStyling(e)} className="contact-input" placeholder="Email" name="reply_to" required></input>
        <input onClick={(e) => applyStyling(e)} className="contact-input" placeholder="Subject" name="subject" required></input>
        <textarea rows="4" onClick={(e) => applyStyling(e)} className="contact-input" placeholder="Message" name="message" required></textarea>
        <button type="submit" className="contact-btn animation">Contact Us</button>
    </form>
  );
};

export default Form;
