import React from "react";
import PLACESSpace from "./PLACESSpace";
import "./PLACESList.css";
import data from "./places-data.json";

function PLACESList() {
  const places = data.map(( {title, address, images, hours }) => {
    // const {title, address, images } = place;
    return (
      <PLACESSpace
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    );
  });

  return <div className="PLACESList">{places}</div>;
}

export default PLACESList;
