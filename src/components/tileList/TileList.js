import { render } from "@testing-library/react";
import React from "react";
import { ContactsPage } from "../../containers/contactsPage/ContactsPage";
import Tile from "../tile/Tile"

const TileList = (props) => {
  console.log('props.contactArray',  props.contactArray)
  return(
    <div>
      {props.contactArray.map((each, i) => <Tile key={i} contact={each}/>)}
    </div>
  )
}

export default TileList