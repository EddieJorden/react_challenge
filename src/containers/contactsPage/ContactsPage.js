import React, { useEffect, useState } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from '../../components/tileList/TileList';



export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [newContacts, setNewContacts] = useState([])
  const [currentContacts, setCurrentContacts] = useState([])

  const [currentName, setCurrentName] = useState("")
  const [currentPhone, setCurrentPhone] = useState("")
  const [currentEmail, setCurrentEmail] = useState("")

  const [dupliacateName, setDuplicateName] = useState(false)

  useEffect(() => {
    for (let i = 0; i < props.contacts.length; i++) {
      if (props.contacts[i].name === currentName) {
        setDuplicateName(true)
        console.log('dupliacateName value ?', dupliacateName)
      }
    }
    
  })


  const handleSubmit = (e) => {
    if (dupliacateName === false) {
      props.addContact(currentName, currentPhone, currentEmail)
      setCurrentName("")
      setCurrentPhone("")
      setCurrentEmail("")
    }

    // if the duplicate state variable is false, 
    // call the callback function for adding a new contact 
    // (passed via props) using the data from the form.

    e.preventDefault();
    if (true) {
      
    }
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section className='add-contact-section'>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={currentName} 
          phone={currentPhone} 
          email={currentEmail} 
          setCurrentName={setCurrentName} 
          setCurrentPhone={setCurrentPhone} 
          setCurrentEmail={setCurrentEmail} 
          handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section className='contacts'>
        <h2>Contacts</h2>
        {/* In the Contacts section, render a TileList with the contact array passed via props */}
        <TileList contactArray={props.contacts}/>
      </section>
      {console.log('props from ContactsPage.js', props)}
    </div>
  );
};
