import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  // optimization - keeping in cache
  const generatePass = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed)  str += "0123456789"
    if (charAllowed)  str += "!@#$%^&*_+=-()[]{}~`,./"

    for(let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 101)
      window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePass()
  }, [length, numberAllowed, charAllowed, generatePass])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-4xl text-center">Generate your password here!</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text"
            value = {password}
            className="outline-none w-full py-1 px-3"
            placeholder='Password'
            readOnly 
            ref = {passwordRef}
            />
            <button className="outline-none bg-blue-700 text-white px-3 py-.5 shrink-0 hover:bg-blue-600"
            onClick={copyPasswordToClipboard}
            >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input 
                type="range"
                min = {6}
                max = {100}
                value = {length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
                />
                <label >Length : {length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input 
                  type="checkbox"
                  defaultChecked = {numberAllowed}
                  id="numberInput"
                  onChange={() =>{
                    setNumberAllowed((prev) => !prev)
                    }} 
                  />
                <label htmlFor="">Numbers</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input 
                  type="checkbox"
                  defaultChecked = {charAllowed}
                  id="charInput"
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                    }} 
                  />
                <label htmlFor="">Characters</label>
              </div>
            </div>
      </div>
  )
}

export default App
