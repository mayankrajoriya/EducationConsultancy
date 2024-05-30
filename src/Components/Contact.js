import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact container">
      <h1>Contact Us</h1>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobileno">Mobile No.</label>
            <input type="tel" id="tel" name="tel" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required=""
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              alert("Thanks for Contacting Us");
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
