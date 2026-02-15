import React from 'react'
import Three from './Three'

function Two({theme}) {
  return (
    <div>
      <h1>I am the Second Person</h1>
      <Three theme={theme}/>
    </div>
  )
}

export default Two
