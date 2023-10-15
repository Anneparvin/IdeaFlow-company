
import './App.css'
import Home from './Components/Pages/Home/Home'
import GetFlow from './Components/Pages/GetFlow/GetFlow'
import Navbar from './Components/Pages/Shared/Navbar'
import Connection from './Components/Pages/Connection/Connection'
import Suggest from './Components/Pages/Suggest/Suggest'
import Profile from './Components/Pages/Profile/Profile'
import HireMe from './Components/Pages/HireMe/HireMe'
import Footer from './Components/Pages/Footer/Footer'

function App() {
  


  return (
    <div>
    <Navbar></Navbar>
     <Home></Home>
     <GetFlow></GetFlow>
     <Connection />
     <Suggest></Suggest>
     <Profile></Profile>
     <HireMe></HireMe>
     <Footer></Footer>
    </div>
  )
}

export default App
