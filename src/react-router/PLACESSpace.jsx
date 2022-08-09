// src/PLACESSpace.js
import { Link } from 'react-router-dom';
import "../PLACESSpace.css";

function PLACESSpace(props) {
  const { name, image, address, hours, id } = props;
  return (
    <div className='PLACESSpace'>
      <Link to={`/details/${id}`}>
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        width="300"
        height="300"
        alt="Photo of the attraction"
      />
      </Link>
      <div>{address}</div>
      <div className='hours'>Hours: {hours}</div>
    </div>
  )
}

export default PLACESSpace;