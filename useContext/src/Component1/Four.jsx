import React from 'react'

function Four({theme}) {

    const h1style={
        backgroundColor:theme==='light'?'white':'black',
        color:theme==='light'?'black':'white',
    }
  return (
    <div>
      <h1 style={h1style}>I am the Fourth Person</h1>
    </div>
  )
}

export default Four
