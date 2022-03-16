import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  // contacts state variables and setters
  const [contacts, setContacts] = useState([])
  const [currentContact, setCurrentContact] = useState('')

  const [currentName, setCurrentName] = useState("")
  const [currentPhone, setCurrentPhone] = useState("")
  const [currentEmail, setCurrentEmail] = useState("")
  const [dupliacateName, setDuplicateName] = useState(false)
  const [dupliacateTitle, setDuplicateTitle] = useState(false)


  // appointments state variables and setters
  const [appointments, setAppointments] = useState([])
  console.log('appointments in App.js', appointments)
  const [title, setTitle] = useState("")
  const [currentTitle, setCurrentTitle] = useState("")
  console.log('currentTitle in App.js', currentTitle)
  const [date, setDate] = useState("")
  const [currentDate, setCurrentDate] = useState(null)
  const [time, setTime] = useState("")
  const [currentTime, setCurrentTime] = useState(null)

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const handleSubmit = (e) => {
    if ((dupliacateName === false) && (currentName !== "")) {
      let contactObject = {
        name: currentName,
        phone: currentPhone,
        email: currentEmail
      }
      setContacts([...contacts, contactObject])
      setCurrentName('')
      setCurrentPhone('')
      setCurrentEmail('')
    }
    e.preventDefault();
  };

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
              dupliacateTitle={dupliacateTitle}
              setDuplicateTitle={setDuplicateTitle}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;