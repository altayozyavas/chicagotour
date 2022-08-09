import { useParams } from "react-router-dom";
import data from "../places-data.json";
import "../styles/PLACESDetails.css";

const PLACESDetails = (props) => {
  // get id from url params
  const { id } = useParams();
  // get images, title, desc, hours etc from data (json)
  const { title, desc, address, geo, images, features, hours } = data[id];
  // return details
  return (
    <div className="PLACESDetails">
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>
          <strong>Description: </strong>
          {desc}
        </p>
        <p>
          <strong>Address: </strong>
          {address}
        </p>
        <p>
          <strong>Hours: </strong>
          {hours}
        </p>
        <p>
          <strong>Amenities: </strong>
          {features}
        </p>
        <p>
          <strong>Description: </strong>Latitude: {geo.lat} / Longitude:{" "}
          {geo.lon}
        </p>
      </div>
    </div>
  );
};

export default PLACESDetails;
