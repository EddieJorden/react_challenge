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
  
  
    
  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={currentName} onChange={(e) => {setCurrentName(e.target.value)}}/>
        <input type="tel" value={currentPhone} onChange={(e) => {setCurrentPhone(e.target.value)}} />
        <input type="email" value={currentEmail} onChange={(e) => {setCurrentEmail(e.target.value)}}/>
        <input type="submit"/>
      </form>
    </div>
      
  );
};

export default ContactForm