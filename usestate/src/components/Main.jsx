function Main(props) {

  return (
    <>
      <main>
        <div className='shadow shadow-fuchsia-600 border-2 rounded-2xl text-center p-2'>
            <img src={props.image} alt={props.subject} className='my-2'  />
            <h2>Course : {props.subject}</h2>
            <h2>ID : {props.idNum}</h2>
            <button onClick={props.cartval} className='bg-blue-600 rounded-2xl px-6 py-2 my-2'>Click</button>
        </div>
      </main>
    </>
  )
}
export default Main


