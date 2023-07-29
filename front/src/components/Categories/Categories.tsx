import React, { useState, useEffect } from 'react';

import { Navigate } from "react-router-dom"; 
import star from "./../../img/five-stars.png"
import './../../css/bootstrap-icons.css'
import './Categories.css'

interface Props {
  names: string[] 
}
const drawPrice = (price: { normal: number, less: number|null }) => {
  if (price.less){
    return (
      <div className='d-flex'>
        <p className='text-decoration-line-through text-muted h5'>{ price.normal }$</p>
        <p className='text-danger ms-2 h5'>{ price.less }$</p>
      </div>
    )
  }
  return (
    <div>
      <p className='h5'>{ price.normal }$</p>
    </div>
  )
}

const draw = (ele: string) => {
  return (
    <div>
      <button className='btn btn-dark rounded-5 me-2 pe-4 ps-4'>{ ele }</button>
    </div>
  )
}

const Categories: React.FC<Props> = ({ names }) => {
  
  return (
     <div className='d-flex scroll-no'>
         {names.map(draw)}
     </div>
    
  );
}

export default Categories;
