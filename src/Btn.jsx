//import React from 'react'
// this code shows hello after clicking to btn( button) . 
/*const Btn = () => {
    const btn1 = ()=> {
        alert ("hello ")
    }
  return (
    <button onClick={btn1}>Btn</button>
  )
}
  //export default Btn;

*/ 

// this code shows event when clicked 
/*
import React from 'react'
const Btn = () => {
  const event  = (e)=> {
console.log(e);

  }
  return (
    <button onClick={event}>Btn</button >
  )
}

export default Btn;

*/

// this line of code shows suscribe when clicked 
import React from 'react'
import { hydrateRoot } from 'react-dom/client'
const Btn = () => {
  const event  = (e)=>{

   e.target.textContent = "subscribed 😊 "
  }
  return (
    <button onClick={event}>Suscribe </button >
  )
}

export default Btn;

