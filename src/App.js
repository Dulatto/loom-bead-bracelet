import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BraceletDesigner from './components/BraceletDesigner';
import Catalog from './components/Catalog';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Cart from './components/Cart';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import Footer from './components/Footer';
import BraceletDetails from './components/BraceletDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/app.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/designer" element={<BraceletDesigner />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/bracelet/:id" element={<BraceletDetails />} /> {/* Dynamic route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
