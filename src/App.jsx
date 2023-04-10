import { useEffect, useState } from 'react'
import Card from './components/Card'
import { v4 as uuidv4 } from 'uuid'
import styles from './App.module.css'
import chevron from "./assets/chevron.svg"

function App() {
  const [isAnyTodo, setIsAnyTodo] = useState(false)
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [filteredTodos, setFilteredTodos] = useState([])


  const handleFormSubmit = (e) => {
    e.preventDefault()
    if(!todo.trim())return;
    setTodos([{
      id: uuidv4(),
      todo: todo,
      completed: false
    },...todos])
    setTodo('')
    setIsAnyTodo(true)
  }
  useEffect(() => {
    setFilteredTodos(todos)

  }, [todos])


  const handleActive = () => {
    setFilteredTodos(todos.filter(todo => !todo.completed))
  }

  const handleCompleted = () => {
    setFilteredTodos(todos.filter(todo => todo.completed))
  }

  const handleAll = () => {
    setFilteredTodos(todos)
  }


  const handleClearClick = () => {
    setTodos(todos.filter(todo => !todo.completed))

  }



  return (
    <div className={styles.App}>
      <main className={styles.wrapper}>
      <h1 className={styles.header}>todos</h1>
      <form onSubmit={handleFormSubmit}>
        <label className={styles.todoLabel} htmlFor="todo">
          <img src={chevron} className={styles.listSvg} alt="chevron" />
        <input type='text' name="todo" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='What needs to be done?' />
        </label>
      </form>
     {
      isAnyTodo && 
      <Card todos={filteredTodos} setTodos={setTodos}/>
     }
     <section className={styles.bottomButtons}>
        <p>{todos.length} items left</p>
        <div className={styles.buttons}>
            <button onClick={handleAll}>All</button>
            <button onClick={handleActive}>Active</button>
            <button onClick={handleCompleted}>Completed</button>
        </div>
        <button className={styles.lastbutton} onClick={handleClearClick}>Clear Completed</button>

     </section>
     </main>
      
    </div>
  )
}

export default App
