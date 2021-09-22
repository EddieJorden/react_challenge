import React from "react";

const ContactForm = ({
  name,
  setCurrentName,
  phone,
  setCurrentPhone,
  email,
  setCurrentEmail,
  handleSubmit
}) => {
  console.log('setName', setCurrentName)
  
    
  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => {setCurrentName(e.target.value)}}/>
        <input type="tel" value={phone} onChange={(e) => {setCurrentPhone(e.target.value)}} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
        <input type="email" value={email} onChange={(e) => {setCurrentEmail(e.target.value)}}/>
        <input type="submit"/>
      </form>
    </div>
      
  );
};

export default ContactForm