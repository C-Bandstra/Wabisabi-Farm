import React, { useState } from "react";

const Form = () => {
  const [status, setStatus] = useState("Contact Us");

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
    
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");

    let result = await response.json();
    
    alert(result.status);
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
        <input className="contact-input" placeholder="Name" required></input>
        <input className="contact-input" placeholder="Email" required></input>
        <input className="contact-input" placeholder="Subject" required></input>
        <textarea rows="4" className="contact-input" placeholder="Message" required></textarea>
        <button type="submit" className="contact-btn">{status}</button>
    </form>
  );
};

export default Form;
