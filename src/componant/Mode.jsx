import React, { useState } from 'react'

const Mode = () => {

const [theme, settheme]=useState("light");

const toggleTheme=() =>{
  settheme(theme==="light"?"dark" :"light");
};


  return (
    <>
    <div className={theme}>
   <div>
    <div className='theme-btn'>
    <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
    <div className='themepara'>
    <p style={{textAlign:'center'}}>Currrent Theme: {theme}</p>
    </div>
    </div>
    </div>
    </>
  );
}

export default Mode
