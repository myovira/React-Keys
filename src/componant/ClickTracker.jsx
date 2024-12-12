import React, { useState } from 'react'

const ClickTracker = () => {

    const [clickcount, setclickcount]=useState(0);

    const handlebuttonclick = ()=>{
        setclickcount(clickcount +1);

    }
  return (
    <>
    <div className='clicktracker'>
      <p>Real Time Click Count: {clickcount}</p>
      <button onClick={handlebuttonclick}>click me</button>
      
    </div>
    </>
  );
}

export default ClickTracker
