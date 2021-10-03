import React, {useState} from "react";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

export const AppointmentsPage = ({contacts, appointments, setAppointments, addAppointment, setCurrentTitle, currentTitle, title, setTitle}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [contact, setContact] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleSubmit = () => {
    setTitle(currentTitle)
    console.log('title', title)
    
  }

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
          setAppointments={setAppointments}
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
