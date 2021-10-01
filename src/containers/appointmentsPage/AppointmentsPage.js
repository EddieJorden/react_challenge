import React, {useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [currentTitle, setCurrentTitle] = useState("")
  const [contact, setContact] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [appointmentArray, setAppointmentArray] =  useState("")


  

  console.log('props from appointmentsPage.js', props)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    appointmentArray.map((appointment, i) => {
      return <div appointment={appointment} key={i}></div>
    })
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
