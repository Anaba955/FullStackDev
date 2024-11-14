import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-screen h-screen duration-200"
    style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center rounded-3xl gap-3 bg-white shadow-lg px-3 py-2">
            <button onClick={() => {setColor("red"); console.log(color)}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red", border:"none"}}>Red</button>
            <button onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green", border:"none"}}>Green</button>
            <button onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue", border:"none"}}>Blue</button>
            <button onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "olive", border:"none"}}>Olive</button>
            <button onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "white", border:"none"}}>White</button>
            <button onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "gray", border:"none"}}>Gray</button>
            <button onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full shadow-lg " style={{backgroundColor: "pink", border:"none"}}>Pink</button>
            <button onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "lavender", border:"none"}}>Lavender</button>
            <button onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black", border:"none"}}>Black</button>
          </div>
        </div>
    </div>
  )
}

export default App
