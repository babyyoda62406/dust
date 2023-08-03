 
  
import './Filters.css'
 
const Filters  = ( ) => {
  
  return (
    <div className=" h5">
      
      <form action="">
        <p className="bg-gray p-3">Price range</p>
        {/* falta por hacer el range con dos selectores */}
        <div className="mt-3">
          <input type="range" name="" id="" />
        </div>
        
        <p className="bg-gray p-3">Colors</p>
        <div className="m-3 d-flex">
          <div className="circle  ">
            <div className="bg-light circle-interior">
              <div className="circle-color"></div>
            </div>
          </div>
        </div>

        <p className="bg-gray p-3">Sizes</p>
        <div className="mt-3">

        </div>

        <p className="bg-gray p-3">Category</p>
        <div className="mt-3">

        </div>

        <div className="d-flex justify-content-center">
          <button className="btn border-black rounded-5 ps-5 pe-5">Discard</button>
          <button className="btn btn-danger ms-3 rounded-5 ps-5 pe-5">Apply</button>
        </div>
      </form>
    </div>
  );
}

export default Filters;
