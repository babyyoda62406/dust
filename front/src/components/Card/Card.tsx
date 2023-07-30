import React, { useState, useEffect } from 'react';

import { Navigate } from "react-router-dom"; 
import star from "./../../img/five-stars.png"
import './../../css/bootstrap-icons.css'
import './Card.css'

interface Props { 
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
      <div className='d-flex order-3'>
        <p className='text-decoration-line-through text-muted h5'>{ price.normal }$</p>
        <p className='text-danger ms-2 h5'>{ price.less }$</p>
      </div>
    )
  }
  return (
    <div className='order-3'>
      <p className='h5'>{ price.normal }$</p>
    </div>
  )
}

const setHorizontal = (horizontal: boolean) => { 
  return horizontal == true ? "row" : ""
}
const setColHorizontal4 = (horizontal: boolean) => { 
  return horizontal == true ? "col-4" : ""
}
const setColHorizontal8 = (horizontal: boolean) => { 
  return horizontal == true ? "col-8" : ""
}

const setOrden = (horizontal: boolean) => { 
  return horizontal == true ? "order-0" : ""
}
const setOrden2 = (horizontal: boolean) => { 
  return horizontal == true ? "order-1" : ""
}
const setOrden3 = (horizontal: boolean) => { 
  return horizontal == true ? "order-2" : ""
}
const Card: React.FC<Props> = ({ photo, stars, clasification, name, price, option, horizontal }) => {
  
  return (
    <div className='card m-3'>
      <div className={"  p-3  cursor " + setHorizontal(horizontal)}>
        <div className={'card-header product-header ' + setColHorizontal4(horizontal)}>
          <div className="contenedor">
            <img src={photo} alt="" loading='lazy' className='img-fluid'/>
            <div className='centrado'>
              { drawOption(option) }
            </div>
            <div className='centrado-2 like rounded-circle p-2'>
              <span className='bi bi-heart icon-card-heart'></span>
            </div>
          </div>    
        </div>

        <div className={"card-body d-flex flex-column " + setColHorizontal8(horizontal)}>    
            <div className={'d-flex stars ' + setOrden3(horizontal)}>
              {drawStars(stars)} 
              <p className='text-muted mt-1 ms-2'>({ stars })</p>
            </div>
            <p className={'text-muted ' + setOrden2(horizontal)}>{ name }</p> 
            <p className={'h2 ' + setOrden(horizontal)}>{ clasification }</p>
            {drawPrice(price)}
        </div>
      </div>
    </div>
    
  );
}

export default Card;
