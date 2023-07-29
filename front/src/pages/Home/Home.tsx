import React, { useState, useEffect } from 'react';

import { Navigate } from "react-router-dom";
import  Card from "../../components/Card/Card"
import Navbar from '../../components/Navbar/Navbar'; 
import Slider from '../../components/Slider/Slider';
import './Home.css'
import mainPhoto from "./../../img/photo3.jpg" 

function Home() { 
  
  return (
     <div>
        <img src={mainPhoto} alt="" className='img-fluid'/>

        <div className='m-5'>
          <div className='d-flex justify-content-between'>
            <div>
              <h1>Sale</h1>
              <p className='text-muted'>Super summer sale</p>
            </div>
            <div>
              <p>View all</p>
            </div>
          </div>
        </div> 
        
        <Slider></Slider>

         
        <Navbar page={'shop'}></Navbar>
     </div>
    
  );
}

export default Home;
