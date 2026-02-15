import React from 'react'
import Two from './Two'

function One({theme}) {
  return (
    <div>
      <h1>I am the First Person</h1>
      <Two theme={theme}/>
    </div>
  )
}

export default One
