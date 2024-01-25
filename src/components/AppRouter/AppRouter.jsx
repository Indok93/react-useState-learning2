import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home/Home"
import { Counter } from "../Counter/Counter"
import { Message } from "../Message/Message"
import { ToDoList } from "../ToDoList/ToDoList"


export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/message" element={<Message />} />
        <Route path="/todolist" element={<ToDoList />} />
    </Routes>
  )
}
