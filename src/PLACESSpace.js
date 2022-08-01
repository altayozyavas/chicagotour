// src/PLACESSpace.js
import logo from './logo.svg'
import "./PLACESSpace.css";

function PLACESSpace(props) {
  const { name, image, address, hours } = props;
  return (
    <div className='PLACESSpace'>
      <h1>{name}</h1>
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