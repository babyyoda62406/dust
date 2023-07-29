import React, { useState, useEffect } from 'react';

import { Navigate } from "react-router-dom";
import  Card from "../../components/Card/Card"
import Navbar from '../../components/Navbar/Navbar'; 
import Slider from '../../components/Slider/Slider'; 
import Categories from '../../components/Categories/Categories';
import mainPhoto from "./../../img/photo3.jpg"  

interface Element {
   photo: string
   categories: string
   name: string
   stars: number
   price: { normal: number, less: number| null }
}

// interface Props {
//    categories: string[]
//    elements: Element[]
//  }



type State = {
   category: string,
   filterHigh: boolean,
   elements: Element[]| null
 };
 
 let stateGeneral: State = { 
   category: "Woman Top",
   filterHigh: false, 
   elements: null
 };
 


const Catalog= () => { 
   const [state, setState] = useState(stateGeneral)

  return (
     <div>
         <div className='m-4'>
            <h1>{ state.category }</h1>

            <Categories names={["T-Shirt", "Crop tops", "Sleeveless", "Pullover", "Blouse", "Shirt"]}></Categories>

            <div className='d-flex justify-content-around'>
               <div className='d-flex'>
                  <span className='bi bi-filter icon-size'></span>
                  <p className='pt-2 mt-1'>Filters</p>
               </div>
               <div className='d-flex'>
                  <span className='bi bi-cloud-arrow-down icon-size'></span>
                  <p className='pt-2 mt-1'>Price: lowest to high</p>
               </div>
               <div>
                  <span className='bi bi-square icon-size'></span>
               </div>
            </div>

            <div>
            <Card title={'hola'} photo={mainPhoto} stars={4} clasification={'Dorothy Perkins'} 
          name={"Evening Dress"} price={{"normal": 15, "less": 12}} 
          option={{"color":"", "text":" "}} horizontal={true}></Card>
            </div>
         </div>
        
        <Navbar page={'shop'}></Navbar>
     </div>
    
  );
}

export default Catalog;
