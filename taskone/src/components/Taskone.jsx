import { useState } from 'react'

function Taskone() {
    const [values,setValue]=useState(0)

    const [inputValue,setInputValue]=useState("")


    const increase=()=>
    {
        setValue(values+1)
    }
    const decrease=()=>
    {
        setValue(values-1)
    }

    // ===========================================================================

  return (
    <>
    <div className='w-auto bg-blue-600 p-7 max-w-3xs m-auto text-center my-2 rounded-3xl'>
      <h2>Count Values : {values}</h2>
      <div className="buttons flex justify-between my-3">
      <button className='bg-amber-500 p-3 rounded-2xl' onClick={increase}>Increase</button>
      <button className='bg-amber-500 p-3 rounded-2xl' onClick={decrease}>Decrease</button>
      </div>
      <button className='bg-amber-500 p-3 rounded-2xl' onClick={()=>setValue(values-values)}>Reset</button>
    </div>

    {/* =========================================================================== */}

    <div className="tasktwo w-auto bg-cyan-400 max-w-3xs m-auto text-center my-2 rounded-3xl p-7 border-2">
        <label htmlFor="Details">Details :</label>
        <input className='border-2 p-1 rounded-2xl' type='text' id='Details' placeholder='Enter a text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <h1>{inputValue}</h1>
    </div>

    {/* ============================================================================ */}

    
    </>
  )
}
export default Taskone





