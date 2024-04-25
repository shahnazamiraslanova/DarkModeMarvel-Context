
import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import { DarkModeContext, DarkModeProvider } from './contexts/DarkModeContext'

function App() {


  return (
      <DarkModeProvider>
        <Header />
        <Cards />
      <Footer />
      </DarkModeProvider>

  )
}

export default App
