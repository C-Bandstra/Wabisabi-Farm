import React, { useState, useRef } from "react";
import emailjs, { init } from 'emailjs-com'

const Form = () => {
  const form = useRef();
  const status = "Send"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6fwg831', 'contact_form', form.current, init("user_0VcUZrsMJ5pqKELU1Q6Vm"))
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
  };

  // const [status, setStatus] = useState("Contact Us");

  const applyStyling = (e) => {
    if(!e.target.classList.contains("input-placeholder")) {
      e.target.classList.add("input-placeholder")
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   setStatus("Sending...");

    
  //   const [ name, email, subject, message ] = e.target.elements;
    
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     subject: subject.value,
  //     message: message.value,
  //   };

  //   // "proxy": "https://wabisabi-mailer.herokuapp.com/"
  //     let response = await fetch("loca/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8",
  //       },
  //       body: JSON.stringify(details),
  //     });
  
  //     setStatus("Submit");
  
  //     let result = await response.json();
      
  //     alert(result.status);
  
  //     reset(e)
  // };

  // const reset = (e) => {
  //   const inputs = document.querySelectorAll("input-placeholder");
  //   inputs.forEach(input => input.classList.remove("input-placeholder"))
  //   e.target.reset(e);
  // }

  return (
    <form ref={form} id="form" className="contact-form" onSubmit={sendEmail}>
        <input onClick={applyStyling} className="contact-input" placeholder="Name" name="user_name" required></input>
        <input onClick={applyStyling} className="contact-input" placeholder="Email" name="reply_to" required></input>
        <input onClick={applyStyling} className="contact-input" placeholder="Subject" name="subject" required></input>
        <textarea rows="4" onClick={applyStyling} className="contact-input" placeholder="Message" name="message" required></textarea>
        <button type="submit" className="contact-btn animation">{status}</button>
    </form>
  );
};

export default Form;
