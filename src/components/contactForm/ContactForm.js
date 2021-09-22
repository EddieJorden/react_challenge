import React from "react";

const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  console.log(name)
  console.log(phone)
  console.log(email)
    
  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
        <input type="tel" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <input type="submit"/>
      </form>
    </div>
      
  );
};

export default ContactForm