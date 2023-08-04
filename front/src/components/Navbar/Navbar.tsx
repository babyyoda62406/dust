import { useContext } from 'react';
import './Navbar.css'  
import { GlobalContext } from '../../../context/GlobalContext';
const Navbar = () => {
  const {MPoint , jostick} = useContext(GlobalContext)

  return (
   <div>
     <div className='mt-5'></div>
     <nav className='d-flex justify-content-evenly fixed-bottom bg-light rounded-top-4 p-2'>
        <div className='navBarItem' onClick={()=>jostick(0)} ><span className={`bi bi-house-door icon-size ${MPoint==0?'icon-red':''}`}></span></div>
        <div className='navBarItem' onClick={()=>jostick(1)} ><span className={`bi bi-cart3 icon-size      ${MPoint==1?'icon-red':''}`}></span></div>
        <div className='navBarItem' onClick={()=>jostick(2)} ><span className={`bi bi-bag icon-size        ${MPoint==2?'icon-red':''}`}></span></div>
        <div className='navBarItem' onClick={()=>jostick(3)} ><span className={`bi bi-heart icon-size      ${MPoint==3?'icon-red':''}`}></span></div>
        <div className='navBarItem' onClick={()=>jostick(4)} ><span className={`bi bi-person icon-size     ${MPoint==4?'icon-red':''}`}></span></div>
     </nav>
   </div>
  );
}
export default Navbar;
