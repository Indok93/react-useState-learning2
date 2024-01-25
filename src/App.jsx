import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Home } from './pages/Home/Home'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Counter } from './components/Counter/Counter'
import { Message } from './components/Message/Message'
import { ToDoList } from './components/ToDoList/ToDoList'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/message" element={<Message />} />
        <Route path="/todolist" element={<ToDoList />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
