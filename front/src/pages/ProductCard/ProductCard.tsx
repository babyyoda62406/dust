 
  
import Slider from '../../components/Slider/Slider';  
import mainPhoto from "./../../img/photo3.jpg"  
import { drawStars } from '../../Utils/Utils';
import './ProductCard.css'
  
const ProductCard = () => {  


  return (
     <div> 
         <h2 className='m-3 text-center'>Short dress</h2>
         <img src={mainPhoto} alt="" className='img-fluid'/>

         <div className='bg-gray pb-1'>
            <div className='row p-3'>
               <div className='col-5 mb-3'>
                  <select class="form-select form-select-sm p-2" aria-label=".form-select-sm example">
                     <option selected>Size</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
               </div>
               <div className='col-5 mb-3'>
                  <select class="form-select form-select-sm p-2" aria-label=".form-select-sm example">
                     <option selected>Black</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
               </div>
               <div className='col-2 contenedor'>
                  <div className='centrado-3 like rounded-circle'>
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

         <div className="d-flex justify-content-center">
            <div className="divider"></div>
         </div>


         <div className='m-4'>
            <div class="accordion" id="accordionExample">
               
               <div class="accordion-item">
                  <h4 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                     Shiping info
                  </button>
                  </h4>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                     <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                  </div>
               </div>

               <div class="accordion-item">
                  <h4 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                     Support
                  </button>
                  </h4>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                     <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                  </div>
               </div>
            
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
