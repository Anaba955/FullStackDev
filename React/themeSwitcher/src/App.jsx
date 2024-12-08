import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'

function App() {

  const [themeMode, setThemeMode] = useState('dark')

  //functions to change themeMode state variable
  function darkMode () {
    setThemeMode('dark')
  }

  function lightMode() {
    setThemeMode('light')
  }

  useEffect(() => {
    // remove classes if any
    document.querySelector('html').classList.remove('light', 'dark') 
    //setting theme according to current themeMode
    document.querySelector('html').classList.add(themeMode) 
  
  }, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, darkMode, lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                   <ThemeBtn/>      
          </div>

          <div className="w-full max-w-sm mx-auto">
                        <Card/>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
