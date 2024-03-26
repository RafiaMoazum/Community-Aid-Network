import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AddCausePage from './pages/AddCausePage'
import RegisterationPage from './pages/RegisterPage'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/registration" element={<RegisterationPage />} />
      <Route path="/" element={<HomePage/>}/>
      <Route path="/addCausePage" element={<AddCausePage/>} />
    </Routes>
    
    </>
  )
}

export default App
