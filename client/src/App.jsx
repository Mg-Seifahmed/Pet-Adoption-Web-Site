import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage';
import Pet from './Pages/Pet';
import Login from './Components/Logincomp/Login';
import Signup from './Components/SignupComp/Signup';
import PetListing from './Components/PetAddcomp/PetListing';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import PostDetails from './Components/PostDetail/PostDetails';
import Dogspage from './Pages/Dogspage';
import Catpage from './Pages/Catpage';
import UserProfile from './Components/UserProfile/UserProfile';
import Search from './Pages/SearchPage/Search';
import AboutUs from './Pages/AboutUs/AboutUs';
import CustomPage from './Pages/CustomPage';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<Homepage />} />
          <Route path='/dogs' element={<Dogspage />} />
          <Route path='/cats' element={<Catpage />} />
          <Route path='/search' element={<CustomPage />} />
          <Route path="/pet" element={<Pet />}>
            <Route path=":petid" element={<Pet />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Addpet" element={<PetListing />} />
          <Route path='/admin' element={<AdminPanel />} />
          <Route path='/admin/:title' element={<PostDetails />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/user' element={<UserProfile />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
