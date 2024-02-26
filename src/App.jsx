import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sign from './components/Sign';

export default function App() {
  return (
    <div className='app'>
          <Navbar />
          
         <BrowserRouter>
             <Routes>
                  <Route path = "/" element={<Home />} />
                  <Route path = "/login" element={<Login />} />
                  <Route path = "/sign" element={<Sign />} />
             </Routes>
         </BrowserRouter>

          <Footer />

    </div>
  );
}

