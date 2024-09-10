import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import PetsCategories from './pages/PetCategories/PetsCategories';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import LoginSignup from './pages/Login/LoginSignup';
import WellnessGuide from './pages/WellnessGuide/WellnessGuide';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Chat from './pages/Chat/chat';


const Layout = () => {
  const location = useLocation();
  const showNavAndFooter = !['/login', '/signup'].includes(location.pathname);

  return (
    <>
      {showNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pets" element={<PetsCategories categories="Pets" />} />
        <Route path="/AccessoriesStores" element={<PetsCategories categories="AccessoriesStores" />} />
        <Route path="/WellnessGuide" element={<WellnessGuide />} />
        <Route path="/Product/:ProductId" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/chat" element={<Chat />} />
        {/* Add other routes here */}
      </Routes>
      {showNavAndFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
