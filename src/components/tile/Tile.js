import React from "react";

export const Tile = (props) => {
  console.log("Tile return", props.contact)
  return (
    <span>
      <span><div>{props.contact.name}</div></span>
      <span><div>{props.contact.phone}</div></span>
      <span><div>{props.contact.email}</div></span>
    </span>
  );
};

export default Tile
