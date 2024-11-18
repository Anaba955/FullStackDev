import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 7
  
  let [counter, setCounter] = useState(15)



  const addValue = () => {
    if(counter < 20)
      counter = counter+1
    console.log(counter)
    setCounter(counter)
  }

  const subValue = () => {
    if(counter > 0)
      setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={addValue}>ADD</button>
      <br />
      <button onClick={subValue}>SUB</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
