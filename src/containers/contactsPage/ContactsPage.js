import React, { useEffect, useState } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  console.log('props', props)
  console.log('props.contacts from contact page', props.contacts)
  console.log('props.duplicateName', props.duplicateName)

  useEffect(() => {
    for (let i = 0; i < props.contacts.length; i++) {
      if (props.contacts[i].name === props.currentName) {
        props.setDuplicateName(true)
      }else props.setDuplicateName(false)
    }
  })
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section className='add-contact-section'>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={props.currentName} 
          phone={props.currentPhone} 
          email={props.currentEmail}
          currentName={props.currentName}
          setCurrentName={props.setCurrentName} 
          setCurrentPhone={props.setCurrentPhone} 
          setCurrentEmail={props.setCurrentEmail} 
          handleSubmit={props.handleSubmit}/>
      </section>
      <hr />
      <section className='contacts'>
        <h2>Contacts</h2>
        {/* In the Contacts section, render a TileList with the contact array passed via props */}
        <TileList contacts={props.contacts}/>
      </section>
    </div>
  );
};
