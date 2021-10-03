import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";


function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{name: "eddie", phone: 1112222, email: "email@email"}])
  const [appointments, setAppointments] = useState([{}])
  const [newContacts, setNewContacts] = useState([])
  const [currentContacts, setCurrentContacts] = useState([])
  const [currentName, setCurrentName] = useState("")
  const [currentPhone, setCurrentPhone] = useState("")
  const [currentEmail, setCurrentEmail] = useState("")
  const [dupliacateName, setDuplicateName] = useState(false)

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };
  /*
  Implement functions to add data to
  contacts and appointments
  */
  // const addContact = (name, phone, email) => {
  //   contacts.push({
  //     name: name,
  //     phone: phone,
  //     email: email
  //   })
    
  // }

  

  const handleSubmit = (e) => {
    if (dupliacateName === false) {
      contacts.push({name: currentName, phone: currentPhone, email: currentEmail})
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
  

  const addAppointment = (name, phone, email) => {
    appointments.push({
      name: name, 
      phone: phone,
      email: email
    })
  }
  
  console.log('appState: contacts', contacts)
  console.log('appState: appointments', appointments)
  
  
  return (
    
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage
              contacts={contacts}
              setContacts={setContacts}
              handleSubmit={handleSubmit}
              setCurrentName={setCurrentName}
              setCurrentPhone={setCurrentPhone}
              setCurrentEmail={setCurrentEmail}
              setDuplicateName={setDuplicateName}
              duplicateName={dupliacateName}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
              handleSubmit={handleSubmit}

            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;