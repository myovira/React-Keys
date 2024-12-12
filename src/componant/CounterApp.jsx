import React, { useState } from 'react'

const CounterApp = () => {
    const [counter, setcounter]=useState(0);

  return (
    <>
    
     <h1 style={{textAlign:"center", background:"lightblue",color:"brown", fontWeight:"800", fontSize:"60px"}}>Counter Application</h1>
       <h2 style={{textAlign:"center", fontSize:"70px", marginTop:"60px"}}>{counter}</h2>
       <div className='btns'>
       <button onClick={()=>{setcounter(counter + 1)}}>+ by 1</button>
       <button onClick={()=>{setcounter(counter -1)}}>- by 1</button>
       <button onClick={()=>{setcounter(0)}}>Reset</button>
       </div>
    
    </>
    
  )
}

export default CounterApp
