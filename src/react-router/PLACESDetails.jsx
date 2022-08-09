import { useParams } from "react-router-dom";
import data from "../places-data.json";

const PLACESDetails = (props) => {
  // get id from url params
  const { id } = useParams();
  // get images, title, desc, hours etc from data (json)
  const { title, desc, address, geo, images, features, hours } = data[id];
  // return details
  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{hours}</p>
        <p>{features}</p>
        <p>
            Latitude: {geo.lat} / Longitude: {geo.lon}
        </p>
      </div>
    </div>
  );
};

export default PLACESDetails;
