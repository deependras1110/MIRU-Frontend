import React from 'react'


function Pause(props) {
  const {handleClick} = props;
  return (
    <button onClick={handleClick()}>
        Pause
    </button>
  )
}

export default Pause