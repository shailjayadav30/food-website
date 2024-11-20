import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About/About';
import Checkout from './pages/Checkout/Checkout';
import Order from './pages/Order';
import Login from './pages/Login';
import Reservation from './pages/REserrvation';
import OrderDetails from './pages/OrderDetails';
import ContactForm from './pages/Contact';
import FoodOrderingSignup from './pages/Signup';
import { useState, ReactElement } from 'react';
import RefreshHandler from './components/Refreshhandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
 
  interface PrivateRouteProps {
    element: ReactElement;
  }

  // PrivateRoute component
  const PrivateRoute = ({ element }: PrivateRouteProps): ReactElement => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Navbar />
      <RefreshHandler setisauthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<FoodOrderingSignup />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
