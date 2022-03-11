import React from "react";

const ContactForm = ({
  name,
  setCurrentName,
  currentName,
  phone,
  setCurrentPhone,
  currentPhone,
  email,
  setCurrentEmail,
  currentEmail,
  handleSubmit
  }) => {

    // <input type ="text" name="name" placeholder="default_value"></input>


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={currentName} onChange={(e) => {setCurrentName(e.target.value)}}/>
        <input type="tel" placeholder="phone" value={currentPhone} onChange={(e) => {setCurrentPhone(e.target.value)}} />
        <input type="email" placeholder="email" value={currentEmail} onChange={(e) => {setCurrentEmail(e.target.value)}}/>
        <input type="submit"/>
      </form>
    </div>
  );
};

export default ContactForm