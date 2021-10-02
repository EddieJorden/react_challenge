import React from "react";

export const Tile = (props) => {
  console.log("Tile return", props.contact)
  return (
    <div>
      <span><div className="tile-title">{props.contact.name}</div></span>
      <span><div className="tile">{props.contact.phone}</div></span>
      <span><div className="tile">{props.contact.email}</div></span>
    </div>
  );
};

export default Tile
