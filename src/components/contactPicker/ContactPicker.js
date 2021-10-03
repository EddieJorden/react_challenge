import React from "react";
import { render } from "react-dom";

export const ContactPicker = ({handleSubmit, contacts}) => {
  return (
    <div>
      <label ></label>
        <select name="contacts" onChange={handleSubmit}>
          <option value="no contact selected">no contact selected</option>
          {contacts.map((each, i) => <option key={i} value={each.name}>{each.name}</option>)}
        </select>
    </div>
  )
};
