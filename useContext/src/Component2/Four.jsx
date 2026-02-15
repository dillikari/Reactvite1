import React, { useContext } from 'react'
import {createcontextValue} from '../App'


function Four() {

    const {theme}=useContext(createcontextValue)


    const styleValue={
        backgroundColor:theme==='light'?'black':'aqua',
        color:theme==='light'?'aqua':'black',
    }
  return (
    <div>
      <h1 style={styleValue}>I am Fourth Person</h1>
    </div>
  )
}

export default Four
