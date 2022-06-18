import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  BrowserRouter,
  Route, 
  Routes 
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nosotros from './components/nosotros/Nosotros';
import Menu from './components/menu/Menu';
import Reserva from './components/reserva/Reserva'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
  <Routes>
   <Route path='/' element={<Nosotros />}> </Route>
   <Route path='/menu' element={<Menu />}> </Route>
   <Route path='/reserva' element={<Reserva/>}> </Route>
    </Routes>

    <Footer/>
  </BrowserRouter>
  </React.StrictMode>
);


