import React from "react";

export const ContactPicker = ({handleSubmit, contacts}) => {
  
  console.log("contacts", contacts)
  return (
    <div>
      
      <label for="contacts">choose a contact:</label>

        <select onChange={handleSubmit}>
          <option value="no contacts selected">no contacts selected</option>
        </select>
    </div>
  );
};
