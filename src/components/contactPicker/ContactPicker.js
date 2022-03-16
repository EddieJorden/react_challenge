import React from "react";

export const ContactPicker = ({setCurrentContact, contacts}) => {

    return (
      <div>
        <label ></label>
          <select name="contacts" onChange={(e) => {setCurrentContact(e.target.value)}}>
            <option value="no contact selected">no contact selected</option>
            {contacts.map((each, i) => <option key={i} value={each.name}>{each.name}</option>)}
          </select>
      </div>
    )
};
