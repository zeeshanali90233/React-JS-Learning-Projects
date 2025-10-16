import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [names, setNames] = useState([
    "Zeeshan", "Asad", "Farhan", "Ali"
  ])


  const handleChange = (e) => {
    setName(e.target.value)
  }

  function addMyName() {
    setNames([...names, name])
    setName("")
  }
  return (
    <>
      {
        names.map((nm) => {
          return (
            <div className='container' style={{ backgroundColor: "red", border: "black solid 2px" }}>
              <div>
                {nm}
              </div>
            </div>
          )
        })
      }

      <input type="text" name="name" id="name" onChange={handleChange} value={name} placeholder='Enter your name' />
      <button onClick={addMyName}>Add My Name</button>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
