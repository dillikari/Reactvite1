import React from 'react'
import Four from './Four'

function Three({theme}) {
  return (
    <div>
      <h1>I am the Third Person</h1>
      <Four theme={theme}/>
    </div>
  )
}

export default Three
