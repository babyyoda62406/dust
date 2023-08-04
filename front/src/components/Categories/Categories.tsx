import React from 'react';
import { PropsCategories } from '../../types/types';
import './../../css/bootstrap-icons.css'
import './Categories.css'


const draw = (ele: string) => {
  return (
    <div>
      <button className='btn btn-dark rounded-5 me-2 pe-4 ps-4'>{ ele }</button>
    </div>
  )
}

const Categories: React.FC<PropsCategories> = ({ names }) => {
  
  return (
     <div className='d-flex scroll-no'>
         {names.map(draw)}
     </div>
    
  );
}

export default Categories;
