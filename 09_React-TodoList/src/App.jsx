import { useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [todoInputText, setTodoInputText] = useState('')

  const handleInputText = (e) => {
    setTodoInputText(e.target.value)
  }

  const addToList = (e) => {
    e.preventDefault()
    // Using Spread Operator to copy array 
    setTodoList([todoInputText, ...todoList])
    setTodoInputText('')
  }

  const removeTodo = (indexToDelete) => {
    const updatedArray = todoList.filter((todo, index) => {
      if (index != indexToDelete) {
        return todo
      }
    })
    setTodoList(updatedArray)
  }
  return (
    <div className='w-full h-screen bg-amber-100'>
      <form onSubmit={addToList}>
        <div className='flex w-full justify-center pt-10 gap-2'>
          <div>
            <input type="text" name="query" id="query" placeholder='Enter you Todo' onChange={handleInputText} className='border-2 border-solid rounded px-3 py-2'
              value={todoInputText}
            />
          </div>

          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type='submit'>
            Add
          </button>
        </div>
      </form>

      <div className='w-md  mx-auto mt-2 flex flex-col gap-y-2'>
        {/* Mapping Todos: Any Array can be mapped here */}
        {
          todoList.map((todo, index) => {
            return (
              <div className="flex items-center justify-between bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                <div className='flex  items-center'>
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                  <p>{todo}</p>
                </div>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                  onClick={() => {
                    removeTodo(index)
                  }}
                >
                  Remove
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App