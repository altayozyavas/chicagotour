// src/PLACESSpace.js
import { Link } from 'react-router-dom';
import "../PLACESSpace.css";

function PLACESSpace(props) {
  const { name, image, address, hours, id } = props;
  return (
    <div className='PLACESSpace'>
      <div className='attraction-names'>
      <Link to={`/details/${id}`}><h1>{name}</h1></Link>
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        width="300"
        height="300"
        alt="Photo of the attraction"
      />
      <div>{address}</div>
      <div className='hours'>Hours: {hours}</div>
    </div>
  )
}

export default PLACESSpace;