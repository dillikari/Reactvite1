
// By using Props

// import React, { useState } from 'react'
// import One from './Component1/One'

// function App() {

//   const buttonColor={
//     backgroundColor:'blue',
//     color:'white',
//     padding:'10px',
//   }
//   const [theme,setTheme] = useState('light')

//   const setColor=()=>
//   {
//     setTheme((colorValue)=>colorValue==='light' ? 'dark' : 'light' )
//   }
//   return (
//     <>
//       <button style={buttonColor} onClick={setColor}>Change Color</button>
//       <h1>Hello world</h1>
//       <One theme={theme}/>
//     </>
//   )
// }

// export default App


// without using props we can use useContext()

import { createContext, useState } from 'react'
import Four from './Component2/Four'
import One from './Component2/One'
import Two from './Component2/Two'
import Three from './Component2/Three'

export const createcontextValue = createContext()

function App(){
  const [theme,setTheme]=useState('light')

  const colorTheme=()=>
  {
    setTheme((colorvalue)=>colorvalue==='light'?'dark':'light')
  }

  return(
    <>
    <createcontextValue.Provider value={{theme:theme}}>
    <h1>Number of Student</h1>
    <button onClick={colorTheme}>Change Color</button>
    <Four />
    <One/>
    <Two/>
    <Three/>
    </createcontextValue.Provider>
      
    </>
  )
}
export default App


