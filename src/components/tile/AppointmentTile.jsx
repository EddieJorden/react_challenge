import React from "react";

export const AppointmentTile = (props) => {
  if(props.appointment) {
    return (
      <div>
        <span><div className="tile-title">{props.appointment.contact}</div></span>  
        <span><div className="tile-title">{props.appointment.title}</div></span>
        <span><div className="tile">{props.appointment.date}</div></span>
        <span><div className="tile">{props.appointment.time}</div></span>
      </div>
    )
  } else return 'nothing returned'
};

export default AppointmentTile;
