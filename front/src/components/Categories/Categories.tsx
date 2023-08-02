import React from 'react';
 
import './../../css/bootstrap-icons.css'
import './Categories.css'

interface Props {
  names: string[] 
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
