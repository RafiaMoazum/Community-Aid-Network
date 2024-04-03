import { Routes,Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AddCausePage from './pages/AddCausePage'
import CauseDetailsPage from './pages/CauseDetailsPage'
import RegisterationPage from './pages/RegisterPage'
import AdminPanel from './pages/AdminPanel/AminPanel'
import PendingApproval from './pages/AdminPanel/PendingApproval'
import CausesData from './pages/AdminPanel/CausesData'
import DonationData from './pages/AdminPanel/DonationData'
import Signup from './components/forms/registrationForm'
import NavbarM from './components/NavBar'
import HeroSection from './components/HeroSection'
import PeopleDonated from './pages/AdminPanel/PeopleDonated'
import PeopleAppliedForDonation from './pages/AdminPanel/PeopleAppliedForDonation'
import SignIn from './components/forms/signInForm'
import LogOut from './pages/Logout'
import SigninProtectedRoute from './routing/protectedRoute'
import CategoryWiseCauses from './pages/CategoryWiseCauses'
import AllCauses from './pages/AllCauses'
import Footer from './components/footer'
import DonationForm from './pages/DonationForm'



function App() {

  return (
    <>
    <NavbarM/>

    <Routes>
      <Route path="/registration" element={<Signup />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/logout' element={<LogOut />} />
      <Route path="/" index element={<HomePage/>}/>
      <Route path="/addCausePage" element={
        <SigninProtectedRoute>
            <AddCausePage />
        </SigninProtectedRoute>
    } />
      <Route path="/causeDetailsPage/:id" element={<CauseDetailsPage/>} />
      <Route path="/adminPanel" element={<AdminPanel/>} />
      <Route path="/pendingApproval" element={<PendingApproval/>} />
      <Route path="/causesData" element={<CausesData/>} />
      <Route path="/donationData" element={<DonationData/>} />
      <Route path="/peopleDonated" element={<PeopleDonated/>} />
      <Route path="/peopleAppliedForDonation" element={<PeopleAppliedForDonation/>} />
      <Route path="/categoryWiseCauses" element={<CategoryWiseCauses/>}/>  
      <Route path="/allCauses" element={<AllCauses/>} />
      <Route path="/donationForm" element={<DonationForm/>} />
      <Route path="/donationForm" element={
        <SigninProtectedRoute>
           {<DonationForm/>}
        </SigninProtectedRoute>
    } />

    </Routes>
    
    <Footer/>
    </>
  )
}
export default App
