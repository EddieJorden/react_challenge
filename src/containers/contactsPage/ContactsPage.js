import React, { useState } from "react";


export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState(null)
  const [phone, setPhone] = useState(null)
  const [email, setEmail] = useState(null)

  console.log('props from ContactsPage.js', props)

  const handleSubmit = (e) => {
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
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
