import React from 'react';
 

import './Navbar.css'
  

interface Props {
   page: string 
}

const select = (name: string, page: string) => {
   
   if (name == page) {
      console.log(name, page)
      return "icon-red"
   }
   return name == page ? "icon-red" : ""
}

const Navbar: React.FC<Props> = ({ page}) => {
  
  return (
   <div>
      <div className='mt-5'></div>
     <nav className='d-flex justify-content-evenly fixed-bottom bg-light rounded-top-4 p-2'>
        <div className=''><span className={'bi bi-house-door icon-size ' + select("home", page)}></span></div>
        <div className=''><span className={'bi bi-cart3 icon-size ' + select("shop", page)}></span></div>
        <div className=''><span className={'bi bi-bag icon-size ' + select("bag", page)}></span></div>
        <div className=''><span className={'bi bi-heart icon-size ' + select("heart", page)}></span></div>
        <div className=''><span className={'bi bi-person icon-size ' + select("person", page)}></span></div>
     </nav>
   </div>
  );
}

export default Navbar;
