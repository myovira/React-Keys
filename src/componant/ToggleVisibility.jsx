import React, { useState } from 'react'

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState('Show');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setButtonText(isVisible ? 'Show' : 'Hide');
  };

  return (
    <div className='toggle'>
      <button onClick={toggleVisibility}>{buttonText}</button>
      {isVisible && (
        <p style={{fontSize:"20px", color:"brown", fontWeight:"600"}}>"Hard work always pays off, whatever you do."<br></br>  -Dustin Lynch</p>
      )}
    </div>
  );
}

export default ToggleVisibility
