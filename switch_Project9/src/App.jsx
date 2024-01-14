import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/Themebutton'
import Card from './components/card'
//8:14
function App() {
  const [thememode, setThememode] = useState('light')

  const darkMode = () => {
    setThememode('dark')
  }
  const lightMode = () => {
    setThememode('light')
  }

  useEffect(()=>{
    const doc= document.querySelector('html')
    doc.classList.remove('light' , 'dark')
    doc.classList.add(thememode)
  }, [thememode])

  return (
    <ThemeProvider value={{thememode, darkMode, lightMode}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div> 

          <div className="w-full max-w-sm mx-auto">
            <Card/>

          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
