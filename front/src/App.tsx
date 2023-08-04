
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/bootstrap-icons.css'
import '@splidejs/react-splide/css';
import './App.css'
import { useState } from 'react'; 
import HandlerLayout from './components/HandlerLayout/HandlerLayout';


const  App = () => { 
  const [layout , setLayout] = useState<number>(0)
  return <>
      <HandlerLayout MPoint={layout} jostick = {setLayout} />
  </>
}

export default App
