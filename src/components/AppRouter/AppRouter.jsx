import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home/Home"
import { Counter } from "../Counter/Counter"
import { Message } from "../Message/Message"
import { ToDoList } from "../ToDoList/ToDoList"
import { Effects } from "../Effects/Effects"
import { StopWatch } from "../StopWatch/StopWatch"
import { Joke } from "../Joke/Joke"


export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/message" element={<Message />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/effects" element={<Effects />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/joke" element={<Joke />} />
    </Routes>
  )
}
