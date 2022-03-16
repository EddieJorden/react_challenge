import React from "react";

export const ContactTile = (props) => {
  if(props.contact) {

    return (
      <div>
        <span><div className="tile-title">{props.contact.name}</div></span>
        <span><div className="tile">{props.contact.phone}</div></span>
        <span><div className="tile">{props.contact.email}</div></span>
      </div>
    );
  } else return 'no contacts'
};

export default ContactTile;
