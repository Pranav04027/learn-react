import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('Olive')

  function changeColor(color){
    setColor(color)
  }

  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='border-black'
          onClick={() => changeColor('blue')}>blue
          </button>
          <button className='border-black'
          onClick={() => changeColor('red')}>red
          </button>
          <button className='border-black'
          onClick={() => changeColor('purple')}>purple
          </button>
          <button className='border-black'
          onClick={() => changeColor('Olive')}>default
          </button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
