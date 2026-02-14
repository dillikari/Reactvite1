
import React, { useState } from 'react'

const Tasktwo = () => {

    const [inputValue,setValue]=useState('')
    const [submitValue,setSubValue]=useState('')

    const allvalues=(e)=>
    {
        e.preventDefault();
        setSubValue(inputValue)
    }
  return (
    <div>
        <form onSubmit={allvalues}>
        <input type="text" value={inputValue} onChange={(e)=>setValue(e.target.value)} />
        <button type='submit'>Submit</button>
        </form>
        <h1>{submitValue}</h1>
    </div>
  )
}

export default Tasktwo
