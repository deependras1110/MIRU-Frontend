import React from 'react'


function Play(props) {
  const {handleClick} = props;
  return (
    <button onClick={handleClick()}>
        Play
    </button>
  )
}

export default Play