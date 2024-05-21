import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage';
import AnimalsPage from './Pages/Animalspage';
import Pet from './Pages/Pet';
import Login from './Components/Logincomp/Login';
import Signup from './Components/SignupComp/Signup';
import PetListing from './Components/PetAddcomp/PetListing';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import PostDetails from './Components/PostDetail/PostDetails';
import UserProfile from './Components/UserProfile/UserProfile';
import Search from './Pages/SearchPage/Search';


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<Homepage />} />
          <Route path='/dogs' element={<AnimalsPage category="dogs" />} />
          <Route path='/cats' element={<AnimalsPage category="cats" />} />
          <Route path="/pet" element={<Pet />}>
            <Route path=":petid" element={<Pet />} />
            
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Addpet" element={<PetListing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
