import React, {useState} from "react";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

export const AppointmentsPage = ({contacts, appointments, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [currentTitle, setCurrentTitle] = useState("")
  const [contact, setContact] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  // const [contacts, setContacts] =  useState("")

  // console.log('contacts from appointmentsPage', contacts)

  const handleSubmit = (e) => {
    // e.preventDefault();
    
    /*
    Add contact info and clear data  
    */
    // contacts.push(e)
    return 'handleSubmit function here'
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          curreentTitle={currentTitle}
          setCurrentTitle={setCurrentTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contacts={contacts}
          handleSubmit={handleSubmit}
          appointments={appointments}
          addAppointment={addAppointment}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          contacts={contacts}
          appointments={appointments}
          addAppointment={addAppointment}
        />
      </section>
    </div>
  );
};
