import React from "react";
import { AppointmentsPage } from "../../containers/appointmentsPage/AppointmentsPage";
import { ContactPicker } from "../contactPicker/ContactPicker"

const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  currentTitle,
  setCurrentTitle,
  contact,
  setContact,
  date,
  setDate,
  currentDate,
  setCurrentDate,
  time,
  setTime,
  currentTime,
  setCurrentTime,
  appointments,
  setAppointments,
  handleSubmit
}) => {

  
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={currentTitle}
          onChange={(e) => {setCurrentTitle(e.target.value)}}
        />
        <input
          type="text"
          placeholder="date"
          value={currentDate}
          onChange={(e) => {setCurrentDate(e.target.value)}}
          min={getTodayString()}
        />
        <input
          type="text"
          placeholder="time"
          value={currentTime}
          onChange={(e) => {setCurrentTime(e.target.value)}}
        />
        <ContactPicker contacts={contacts} handleSubmit={handleSubmit}/>
        <input type="submit"/>
      </form>
    </div>
  );
};

export default AppointmentForm
