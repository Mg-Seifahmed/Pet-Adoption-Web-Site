import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage';
import AnimalsPage from './Pages/Animalspage';
import Pet from './Pages/Pet';
import Login from './Components/Logincomp/Login';
import Signup from './Components/SignupComp/Signup';


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
      
      <Route path='/' element={<Homepage />}/>
          <Route path='/dogs' element={<AnimalsPage category="dogs"/>}/>
          <Route path='/cats' element={<AnimalsPage category="cats"/>}/>
          <Route path="/pet" element={<Pet />}>
            <Route path=":petid" element={<Pet />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
