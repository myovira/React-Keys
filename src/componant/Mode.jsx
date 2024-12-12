import React from 'react'

const Mode = () => {


  return (
    <>
    <div>
     <div className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
    </div>

      
    </div>
    </>
  )
}

export default Mode
