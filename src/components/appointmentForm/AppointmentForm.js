import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  console.log("contacts from appointmentForm", contacts)
  console.log("handleSubmit from appointmentForm", handleSubmit)

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
          value="title"
          onChange={handleSubmit}
        />
        <input
          type="text"
          value="date"
          onChange={(e) => {setDate(e.target.value)}}
          min={getTodayString()}
        />
        <input
          type="text"
          value="time"
          onChange={(e) => {setTime(e.target.value)}}
        />
        <input type="submit" onSubmit={handleSubmit}/>
        <ContactPicker contacts={contacts} handleSubmit={handleSubmit}/>
      </form>
    </div>
  );
};

export default AppointmentForm
