import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'

function App() {

  return (
    <>
      <main className='main'>
        <header className='header'>
          <h1>To-do List</h1>
        </header>
        <section className="section">
          <article className="article form">
            <TaskForm />
          </article>
          <article className="article list">
            <TaskList />
          </article>
        </section>
      </main>
    </>
  )
}

export default App
