import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Home } from './pages/Home/Home'
import { Counter } from './components/Counter/Counter'
import { Message } from './components/Message/Message'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/message" element={<Message />} />
        {/* <Route path="/" element={} /> */}
      </Routes>
    </>
  )
}

export default App
