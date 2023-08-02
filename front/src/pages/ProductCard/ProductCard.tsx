 
  
import Slider from '../../components/Slider/Slider';  
import mainPhoto from "./../../img/photo3.jpg"  
import { drawStars } from '../../Utils/Utils';

  
const ProductCard= () => {  


  return (
     <div> 
         <h2 className='m-3 text-center'>Short dress</h2>
         <img src={mainPhoto} alt="" className='img-fluid'/>

         <div className='bg-gray'>
            <div className='row p-3'>
               <div className='col-4'>
                  <input type="text" name="" id="" className='form-control' />
               </div>
               <div className='col-4'>
                  <input type="text" name="" id="" className='form-control' />
               </div>
               <div className='col-4 contenedor'>
                  <div className='centrado-3 like rounded-circle p-2'>
                     <span className='bi bi-heart icon-card-heart'></span>
                  </div>
               </div>
            </div>

               
            <div className='m-4'>
               <div className='row'>
                  <p className='col-6 h2 m-0'>H&M</p>
                  <p className='col-6 h2 m-0 text-end'>$19.99</p>
               </div>
               <p className='text-muted m-0'>Short black dress</p>
               { drawStars(10) }
               <p>Short dress in soft cotton jersey with decorative buttons down the front and a wide</p>
            </div>
         </div>

         <div className='m-4 d-grid gap-2'>
            <button className='btn btn btn-danger text-uppercase rounded-5 p-3'>Add to Cart</button>
         </div>


         <div className='m-4'>
            <div>
               Shoping info
            </div>
            <div>
               Support
            </div>
         </div>

         <div>
         <div className='row m-4'>
               <p className='col-6 h4 m-0'>You can also like this</p>
               <p className='col-6 text-muted m-0 text-end'>12 items</p>
            </div>
         </div>

         <Slider></Slider>
     </div>
    
  );
}

export default ProductCard;
