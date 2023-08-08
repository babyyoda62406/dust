import { useState } from 'react';
import './Filters.css'


 
const Filters = () => {
  const [state, setState] = useState<string[]>([])
  
  const clickColor = (color: string) => {
    let mk: boolean = false 
    const s: string[] = []
    state.forEach((ele, pos) => {
      s.push(ele)
      if (ele == color) {
        mk = true 
        s.pop()
      }
    })
    if (!mk) {
      s.push(color)
    } 
    console.log(s)
    setState(s)
  }
  const checkActive = (color: string) => {
    let mk: boolean = false
    state.forEach((ele) => {
      if (ele == color) {
        mk = true
      }
    })
    if (mk) {
      return "select"
    }
    return ""
  }

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
          <div className={"circle me-1 " + checkActive("black")} onClick={() => clickColor("black")}>
            <div className="bg-light circle-interior contenedor">
              <div className="circle-color"></div>
            </div>
          </div>
          
          <div className={"circle me-1 " + checkActive("beige")} onClick={() => clickColor("beige")}>
            <div className="bg-light circle-interior contenedor">
              <div className="circle-color beige"></div>
            </div>
          </div>

          <div className={"circle me-1 " + checkActive("red")} onClick={() => clickColor("red")}>
            <div className="bg-light circle-interior contenedor">
              <div className="circle-color bg-red"></div>
            </div>
          </div>

          <div className={"circle me-1 " + checkActive("gray")} onClick={() => clickColor("gray")}>
            <div className="bg-light circle-interior contenedor">
              <div className="circle-color bg-gray"></div>
            </div>
          </div>

          <div className={"circle me-1 " + checkActive("blue")} onClick={() => clickColor("blue")}>
            <div className="bg-light circle-interior contenedor">
              <div className="circle-color bg-primary"></div>
            </div>
          </div>
        </div>

        <p className="bg-gray p-3">Sizes</p>
        <div className="m-3 d-flex">
          <div className="box-sizes me-2">XS</div> 
          <div className="box-sizes select-option me-2">S</div> 
          <div className="box-sizes select-option me-2">M</div> 
          <div className="box-sizes me-2">L</div> 
          <div className="box-sizes me-2">XL</div> 
        </div>

        <p className="bg-gray p-3">Category</p>
        <div className="m-3 d-flex">
          <div className="box-sizes category-with me-2">All</div>
          <div className="box-sizes category-with select-option me-2">Women</div>
          <div className="box-sizes category-with select-option me-2">Mem</div>
          <div className="box-sizes category-with me-2">Boys</div>
          <div className="box-sizes category-with me-2">Girls</div>
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn border-black rounded-5 ps-5 pe-5">Discard</button>
          <button className="btn btn-red ms-3 rounded-5 ps-5 pe-5">Apply</button>
        </div>
      </form>
    </div>
  );
}

export default Filters;
