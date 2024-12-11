import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateTodo/>
      <Todos 
        todos = {[
          {
            title:"Study",
            description:"Consistency",
            copleted:true
          },
          {
            title:"Go to gym",
            description:"At 6AM",
            copleted:true
          }
        ]}
      />
    </>
  )
}

export default App
