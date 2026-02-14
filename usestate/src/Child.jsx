import React from 'react'

function Child({clickFunction}) {
  return (
    <div>
      <button onClick={clickFunction}>Button Clicked</button>
    </div>
  )
}

export default Child
