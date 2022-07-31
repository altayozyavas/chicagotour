// src/PLACESSpace.js
import logo from './logo.svg'
import "./PLACESSpace.css";

function PLACESSpace(props) {
  const { name, image, address } = props;
  return (
    <div className='PLACESSpace'>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        width="300"
        height="300"
        alt="Buckingham Fountain is a Chicago Landmark"
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default PLACESSpace;