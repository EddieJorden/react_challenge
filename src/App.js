import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";


function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  // contacts state variables and setters
  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([])
  const [newContacts, setNewContacts] = useState([])
  const [currentName, setCurrentName] = useState("")
  const [currentPhone, setCurrentPhone] = useState("")
  const [currentEmail, setCurrentEmail] = useState("")
  const [dupliacateName, setDuplicateName] = useState(false)

  console.log('currentName from app.js', currentName)
  console.log('currentPhone from app.js', currentPhone)
  console.log('currentEmail from app.js', currentEmail)

  // appointments state variables and setters
  const [title, setTitle] = useState("")
  const [currentTitle, setCurrentTitle] = useState("")
  const [date, setDate] = useState("")
  const [currentDate, setCurrentDate] = useState(null)
  const [time, setTime] = useState("")
  const [currentTime, setCurrentTime] = useState(null)
  const [currentContact, setCurrentContact] = useState([])

  console.log('currentTitle', currentTitle)
  console.log('currentDate', currentDate)
  console.log('currentTime', currentTime)
  console.log('currentContact', currentContact)


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
    if ((dupliacateName === false) && (currentName !== "")) {
      contacts.push({name: currentName, phone: currentPhone, email: currentEmail})
      setCurrentName('')
      setCurrentPhone('')
      setCurrentEmail('')

    }
    
    // if the duplicate state variable is false, 
    // call the callback function for adding a new contact 
    // (passed via props) using the data from the form.
    e.preventDefault();
    
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };
  
  // const addAppointment = (title, date, time) => {
  //   appointments.push({
  //     title: title,
  //     date: date,
  //     time: time,
  //   })
  // }

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
              currentName={currentName}
              setCurrentName={setCurrentName}
              currentPhone={currentPhone}
              setCurrentPhone={setCurrentPhone}
              currentEmail={currentEmail}
              setCurrentEmail={setCurrentEmail}
              setDuplicateName={setDuplicateName}
              duplicateName={dupliacateName}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              setAppointments={setAppointments}
              contacts={contacts}
              currentContact={currentContact}
              setCurrentContact={setCurrentContact}
              currentTitle={currentTitle}
              setCurrentTitle={setCurrentTitle}
              title={title}
              setTitle={setTitle}
              date={date}
              setDate={setDate}
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              time={time}
              setTime={setTime}
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;