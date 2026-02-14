// import React from 'react'
// import { useState } from 'react'
// import Child from './Child'

// function App() {
//   const [values,setValues]=useState(0)

//   const handleclick=()=>console.log("Bye World")
//   return (
//     <>
//       <div>
//         <h1>{values}</h1>
//         <button onClick={()=>setValues(values+1)}>Change</button>
//         <Child clickFunction={handleclick}/>
//       </div>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import Header from './components/Header'
// // import Main from './components/Main'

// function App() {
//       const objectinArray=[
//         { idNum:101,
//           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s',
//           name:'Python' },
//         { idNum:102,
//           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s',
//           name:'Java' },
//         { idNum:103,
//           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s',
//           name:'.Net' },
//         { idNum:104,
//           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s',
//           name:'PHP' },
//         { idNum:105,
//           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s',
//           name:'Javascript' },
//         { idNum:106,
//           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s',
//           name:'Typescript' },
//         { idNum:107,
//           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s',
//           name:'Mysql' },
//         { idNum:108,
//           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s',
//           name:'Devops' },
//         { idNum:109,
//           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s',
//           name:'Oracle' }
//     ]
//   return (
//     <>
//       <Header/>
//       <div className='grid grid-cols-3 mx-52 my-9 gap-x-5 gap-y-2'>
//       {objectinArray.map((e)=>(
//       <div key={e.idNum} className='border broder-2 rounded-3xl p-7 text-center'>
//         <img src={e.image} alt={e.name} className='w-92' />
//         <h2>ID : {e.idNum}</h2>
//         <h2>Name : {e.name}</h2> 
//         <button className='bg-red-300 p-3 rounded-2xl w-24 my-3'>Add</button>
//       </div>
//       ))}
//       </div>
//     </>
//   )
// }

// export default App



import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'
function App() {
     const [cartvalue,setCart]=useState(0)
     function cart()
     {
      setCart(cartvalue+1)
     }
  return (
    <>
      <Header cartValuesCount={cartvalue}/>
      <div className='grid grid-cols-3 mx-44 my-8 gap-x-5 gap-y-4'>
      <Main idNum='101' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s' subject='Python' cartval={cart}/>
      <Main idNum='102' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s' subject='Java' cartval={cart}/>
      <Main idNum='103' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s' subject='.Net' cartval={cart}/>
      <Main idNum='104' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s' subject='PHP' cartval={cart}/>
      <Main idNum='105' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s' subject='Javscript' cartval={cart}/>
      <Main idNum='106' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-yuEY01Ex4Mqg-OUjMk0lKnHpmU1lDhqPg&s' subject='Typescript' cartval={cart}/>
      </div>
    </>
  )
}
export default App