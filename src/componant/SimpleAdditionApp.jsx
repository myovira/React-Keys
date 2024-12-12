import React from 'react'
import { useState } from 'react';

const SimpleAdditionApp = () => {

  const [result, setResult] = useState(0);
  const [num1,setNum1]= useState(0);
  const [num2,setNum2]= useState(0);
   
    return (
    <>
    <div className='additionapp'>
    <h1>Simple Addition App</h1>
      <input type='number' value={num1} onChange={(e) => setNum1(e.target.value)} placeholder='Number 1'></input>
      <br />
      <br />
      <input type='number' value={num2} onChange={(e) => setNum2(e.target.value)} placeholder='number 2'></input>
      <br/>
      <br/>
      <button onClick={()=> setResult(parseFloat(num1) + parseFloat(num2))}>Add</button>
      <p>Additon is: {result}</p>

      </div>
    
    </>
  )
}

export default SimpleAdditionApp
