import React from "react";
import Tile from "../tile/Tile"

const TileList = (props) => {

  
  
  return (
    <div>
  {    props.contactArray.map((each, i) => {
        <Tile contact={each}/>
  })}
    </div>
  );
};

export default TileList