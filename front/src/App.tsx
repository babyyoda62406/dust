import 'bootstrap/dist/css/bootstrap.min.css'
import './css/bootstrap-icons.css'
import '@splidejs/react-splide/css';
import './App.css'
import { useContext, useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import HandlerLayout from './components/HandlerLayout/HandlerLayout';
import { GlobalContextProvider } from '../context/GlobalContext';



const  App = () => { 
  return <GlobalContextProvider>
            <HandlerLayout/>
        </GlobalContextProvider>
}

export default App
