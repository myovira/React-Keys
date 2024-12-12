import React, { useEffect, useState } from "react";

const TimerApp = () => {
  const [show, SetShow] = useState(false);
  

  return (
    <div>
      <h1> This is timer component</h1>
      <button onClick={() => SetShow(!show)}>Stop</button>
      {show && <Test />}
    </div>
  );
};

function Test() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Hello there");
    }, 2000);

    return () => {
      // cleanup acttivities, will run on unmount
      console.log("Unmounting");
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <h1>Test Component</h1>
    </>
  );
}

export default TimerApp