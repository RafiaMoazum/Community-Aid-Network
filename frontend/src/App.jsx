import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AddCausePage from './pages/AddCausePage'

import CauseDetailsPage from './pages/CauseDetailsPage'
import Signup from './components/forms/registrationForm'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/registration" element={<Signup />} />
      <Route path="/" element={<HomePage/>}/>
      <Route path="/addCausePage" element={<AddCausePage/>} />
      <Route path="/causeDetailsPage/:id" element={<CauseDetailsPage/>} />
    </Routes>
    
    </>
  )
}
export default App
