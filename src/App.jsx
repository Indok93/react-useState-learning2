import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Home } from './pages/Home/Home'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/" element={} />
        <Route path="/" element={} />
        <Route path="/" element={} /> */}
      </Routes>
    </>
  )
}

export default App
