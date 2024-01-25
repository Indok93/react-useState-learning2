
import './App.scss'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { AppRouter } from './components/AppRouter/AppRouter'

function App() {

  return (
    <>
      <Header></Header>
      <AppRouter />
      <Footer></Footer>
    </>
  )
}

export default App
