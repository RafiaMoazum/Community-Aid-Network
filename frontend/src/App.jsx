import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AddCausePage from './pages/AddCausePage'
import CauseDetailsPage from './pages/CauseDetailsPage'
import RegisterationPage from './pages/RegisterPage'
import AdminPanel from './pages/AdminPanel/AminPanel'
import PendingApproval from './pages/AdminPanel/PendingApproval'
import CausesData from './pages/AdminPanel/CausesData'
import DonationData from './pages/AdminPanel/DonationData'
import Signup from './components/forms/registrationForm'
import { Navbar } from 'react-bootstrap'
import NavbarM from './components/NavBar'


function App() {

  return (
    <>
    {/* <Header/> */}
    <NavbarM/>
    <Routes>
      <Route path="/registration" element={<Signup />} />
      <Route path="/" element={<HomePage/>}/>
      <Route path="/addCausePage" element={<AddCausePage/>} />
      <Route path="/causeDetailsPage/:id" element={<CauseDetailsPage/>} />
      <Route path="/adminPanel" element={<AdminPanel/>} />
      <Route path="/pendingApproval" element={<PendingApproval/>} />
      <Route path="/causesData" element={<CausesData/>} />
      <Route path="/donationData" element={<DonationData/>} />


    </Routes>
    
    </>
  )
}
export default App
