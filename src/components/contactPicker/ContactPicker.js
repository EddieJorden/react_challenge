import React from "react";
import { render } from "react-dom";

export const ContactPicker = ({handleSubmit, contacts}) => {
  console.log("contacts", contacts)
  console.log("handleSubmit", handleSubmit)
  
  return (
    <div>
      <label for="contacts"></label>
        <select name="contacts" onChange={handleSubmit}>
          <option value="no contact selected">no contact selected</option>
          {contacts.map((each, i) => <option key={i} value={each.name}>{each.name}</option>)}
        </select>
    </div>
  )
};
