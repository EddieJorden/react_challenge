import React, {useState} from "react";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  console.log("appointmentpage props", props)
  console.log("appointmentpage props.appointments", props.appointments)

  const testAppointemnt = {
    name: "name",
    phone: 1112223333,
    email: "email@email.com"
  }

  /*
  Define state variables for 
  appointment info
  */
  const [currentTitle, setCurrentTitle] = useState("")
  const [contact, setContact] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [contactArray, setContactArray] =  useState([])

  const currentAppointments = () => {
    console.log("lists current appointments")
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log('e', e)
    /*
    Add contact info and clear data  
    */
   
    contactArray.push(e)
   
    
   
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
          contactArray={contactArray}
          setContactArray={setContactArray}
          handleSubmit={handleSubmit()}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          contactArray={props.contacts}
          appointments={props.appointments}
          addAppointment={props.addAppointment}
        />
      </section>
    </div>
  );
};
