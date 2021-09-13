import React, { useState } from "react";

const Form = () => {
  const [status, setStatus] = useState("Contact Us");

  const applyStyling = (e) => {
    if(!e.target.classList.contains("input-placeholder")) {
      e.target.classList.add("input-placeholder")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    
    const [ name, email, subject, message ] = e.target.elements;
    
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    // "proxy": "https://wabisabi-mailer.herokuapp.com/"
      let response = await fetch("loca/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
  
      setStatus("Submit");
  
      let result = await response.json();
      
      alert(result.status);
  
      reset(e)
  };

  const reset = (e) => {
    const inputs = document.querySelectorAll("input-placeholder");
    inputs.forEach(input => input.classList.remove("input-placeholder"))
    e.target.reset(e);
  }

  return (
    <form id="form" className="contact-form" onSubmit={handleSubmit}>
        <input onClick={applyStyling} className="contact-input" placeholder="Name" required></input>
        <input onClick={applyStyling} className="contact-input" placeholder="Email" required></input>
        <input onClick={applyStyling} className="contact-input" placeholder="Subject" required></input>
        <textarea rows="4" onClick={applyStyling} className="contact-input" placeholder="Message" required></textarea>
        <button type="submit" className="contact-btn animation">{status}</button>
    </form>
  );
};

export default Form;
