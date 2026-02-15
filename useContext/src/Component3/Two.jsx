import React, { useContext } from 'react'
import {createInputContext} from './One'


function Two() {
    const valuesinput=useContext(createInputContext)

    // console.log(valuesinput)
  return (
    <div>
        <h1>Name is : {valuesinput.inputValue}</h1>
    </div>
  )
}

export default Two

