import React from "react";
import ContactTile from '../tile/ContactTile';
import AppointmentTile from '../tile/AppointmentTile'

const TileList = (props) => {
  
  return(
    <div>
      {props.contacts ? props.contacts.map((each, i) => <ContactTile key={i} contact={each}/>) : ""}
      {props.appointments ? props.appointments.map((each, i) => <AppointmentTile key={i} appointment={each}/>) : ""}
    </div>
  )
}

export default TileList