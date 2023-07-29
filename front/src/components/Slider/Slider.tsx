import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { Navigate } from "react-router-dom"; 
import Card from '../Card/Card';
import p from "./../../img/photo3.jpg" 
import pa from "./../../img/five-stars.png" 
import '@splidejs/react-splide/css';

interface Props { 
}

const select = (name: string, page: string) => {
   
   if (name == page) {
      console.log(name, page)
      return "icon-red"
   }
   return name == page ? "icon-red" : ""
}

const Slider = ({ }) => {
  
  return (
   <div> 
    <Splide
      options={ {
        perPage    : 4,
        pagination: false,
        type   : 'loop',
  drag   : 'free',
  focus  : 'center',
		breakpoints: {
			400: {
				perPage: 1,
			},
			640: {
				perPage: 2,
			},
			800: {
				perPage: 2,
			},
			1000: {
				perPage: 3,
			},
		}
      } 
    }
      aria-label="My Favorite Images"
    >
      <SplideSlide>
      <Card photo={p} stars={4} clasification={'Dorothy Perkins'} 
          name={"Evening Dress"} price={{"normal": 15, "less": 12}} 
          option={{"color":"danger", "text":"-20%"}} horizontal={false}></Card>
      </SplideSlide>
      <SplideSlide>
      <Card photo={p} stars={4} clasification={'Dorothy Perkins'} 
          name={"Evening Dress"} price={{"normal": 15, "less": 12}} 
          option={{"color":"danger", "text":"-20%"}} horizontal={false}></Card>
      </SplideSlide>
      <SplideSlide>
      <Card photo={p} stars={4} clasification={'Dorothy Perkins'} 
          name={"Evening Dress"} price={{"normal": 15, "less": 12}} 
          option={{"color":"danger", "text":"-20%"}} horizontal={false}></Card>
      </SplideSlide>
    </Splide>
   </div>
  );
}

export default Slider;
