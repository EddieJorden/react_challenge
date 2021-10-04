import { render } from "@testing-library/react";
import React from "react";
import { ContactsPage } from "../../containers/contactsPage/ContactsPage";
import Tile from "../tile/Tile"

const TileList = (props) => {
  return(
    <div>
      {props.contacts.length > 0 ? props.contacts.map((each, i) => <Tile key={i} contact={each}/>) : "no contacts to display here"}
    </div>
  )
  return "nothing to return here"
}

export default TileList