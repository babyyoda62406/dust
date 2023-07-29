import React, { useState, useEffect } from 'react';

import { Navigate } from "react-router-dom"; 
import star from "./../../img/five-stars.png"
import './../../css/bootstrap-icons.css'
import './Card.css'

interface Props {
  title: string
  photo: string
  stars: number
  clasification: string
  name: string
  price: { normal: number, less: number| null }
  option: { color: string, text: string }
  horizontal: boolean
}

const drawOption = (option: { color: string, text: string }) => {
  return (
    <button className={'rounded-5 btn btn-' + option.color }>{ option.text }</button>
  )
}

const drawStars = (stars: number) => {

  return (
    <div>
      <img src={star} alt=""  width={130}/>
    </div>
  )
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

const setHorizontal = (horizontal: boolean) => {
  return horizontal == true ? "" : ""
}

const Card: React.FC<Props> = ({ title, photo, stars, clasification, name, price, option, horizontal }) => {
  
  return (
     <div>
         <div className="  p-3  cursor">
            <div className='card-header product-header'>

            <div className={"contenedor" + setHorizontal(horizontal)}>
              <img src={photo} alt="" loading='lazy' className='img-fluid'/>
              <div className='centrado'>
                { drawOption(option) }
              </div>
              <div className='centrado-2 like rounded-circle p-2'>
                <span className='bi bi-heart icon-card-heart'></span>
              </div>
            </div>

              

             
              
                 
            </div>
            <div className="card-body">    
                <div className='d-flex'>
                  {drawStars(stars)} 
                  <p className='text-muted mt-1 ms-2'>({ stars })</p>
                </div>
                <p className='text-muted'>{ name }</p> 
                <p className='h2'>{ clasification }</p>
                {drawPrice(price)}
            </div>
        </div>
     </div>
    
  );
}

export default Card;
