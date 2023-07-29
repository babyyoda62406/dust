import React from 'react';

import { Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux'

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/bootstrap-icons.css'

import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/catalog" element={ <Catalog /> } /> 
      </Routes>
    </div>
  );
}

export default App;
