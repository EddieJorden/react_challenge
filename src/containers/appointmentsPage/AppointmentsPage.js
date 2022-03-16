import React, {useState, useEffect} from "react";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  contacts,
  currentContact,
  setCurrentContact,
  appointments,
  setAppointments,
  addAppointment,
  setCurrentTitle,
  title,
  setTitle,
  currentTitle,
  date,
  setDate,
  currentDate,
  setCurrentDate,
  time,
  setTime,
  currentTime,
  setCurrentTime,
  setDuplicateTitle
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [contact, setContact] = useState("")

  useEffect(() => {
    for (let i = 0; i < appointments.length; i++) {
      if (appointments[i].name === currentTitle) {
        setDuplicateTitle(true)
      }else setDuplicateTitle(false)
    }
  })
  
  const createAppointment = (e) => {
    if((setDuplicateTitle === false) && (currentTitle !== "")) {
      let appointmentObject = {
        title: currentTitle,
        date: currentDate,
        time: currentTime,
        contact: currentContact
      }
      //  console.log('console.log in appointmentspage handleSubmit', appointmentObject)
  
      // if ((dupliacateName === false) && (currentName !== "")) {
  
        setAppointments([...appointments, appointmentObject])
        // setContacts([...contacts, {name: currentName, phone: currentPhone, email: currentEmail}])
  
        setCurrentTitle('')
        setCurrentDate('')
        setCurrentTime('')
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

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
          <AppointmentForm 
            curreentTitle={currentTitle}
            setCurrentTitle={setCurrentTitle}
            contact={contact}
            setContact={setContact}
            setCurrentContact={setCurrentContact}
            date={date}
            setDate={setDate}
            setCurrentDate={setCurrentDate}
            time={time}
            setTime={setTime}
            setCurrentTime={setCurrentTime}
            contacts={contacts}
            appointments={appointments}
            setAppointments={setAppointments}
            addAppointment={addAppointment}
            createAppointment={createAppointment}
          />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
          <TileList 
            appointments={appointments}
            addAppointment={addAppointment}
          />
      </section>
    </div>
  );
};
