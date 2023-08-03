
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/bootstrap-icons.css'
import '@splidejs/react-splide/css';
import './App.css'
import { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import HandlerLayout from './components/HandlerLayout/HandlerLayout';


const  App = () => { 
  const [layout , setLayout] = useState<number>(0)
  return <>
      <HandlerLayout MPoint={layout} jostick = {setLayout} />
  </>
}

export default App
