import './App.css'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About/About'
import Checkout from './pages/Checkout/Checkout'
import Order from './pages/Order'
import Login from './pages/Login'
import REserrvation from './pages/REserrvation'
import OrderDetails from './pages/OrderDetails'
import ContactForm from './pages/Contact'
import FoodOrderingSignup from './pages/Signup'
function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/reservation' element={<REserrvation/>}/>
      <Route path='/orderdetails' element={<OrderDetails/>}/>
      <Route path='/contact' element={<ContactForm/>}/>
      <Route path='/signup' element={<FoodOrderingSignup/>}/>


      

    </Routes>
    </BrowserRouter>
  )
}

export default App
