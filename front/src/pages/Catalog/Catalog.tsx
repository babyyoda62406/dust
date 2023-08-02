 
 
import  Card from "../../components/Card/Card"
import Navbar from '../../components/Navbar/Navbar';  
import Categories from '../../components/Categories/Categories';
import mainPhoto from "./../../img/photo3.jpg"  
 


const Catalog= () => {  

  return (
     <div>
         <div className=''>
            <div className='m-4'>
               <h1>Category</h1>
               <Categories names={["T-Shirt", "Crop tops", "Sleeveless", "Pullover", "Blouse", "Shirt"]}></Categories>
            </div>
            
            <div className='d-flex justify-content-around'>
               <div className='d-flex'>
                  <span className='bi bi-filter icon-size'></span>
                  <p className='pt-2 mt-1'>Filters</p>
               </div>
               <div className='d-flex'>
                  <span className='bi bi-cloud-arrow-down icon-size'></span>
                  <p className='pt-2 mt-1'>Price: lowest to high</p>
               </div>
               <div>
                  <span className='bi bi-square icon-size'></span>
               </div>
            </div>

            <div className='bg-gray p-1'>
               <Card photo={mainPhoto} stars={4} clasification={'Dorothy Perkins'} 
                  name={"Evening Dress"} price={{"normal": 15, "less": 0}} 
                  option={{"color":"", "text":" "}} horizontal={true}></Card>
               
               <Card photo={mainPhoto} stars={4} clasification={'Dorothy Perkins'} 
                  name={"Evening Dress"} price={{"normal": 15, "less": 12}} 
                  option={{"color":"", "text":" "}} horizontal={true}></Card>
               
               <Card photo={mainPhoto} stars={4} clasification={'Dorothy Perkins'} 
                  name={"Evening Dress"} price={{"normal": 15, "less": 12}} 
                  option={{"color":"", "text":" "}} horizontal={true}></Card>
            </div>
         </div>
        
        <Navbar page={'shop'}></Navbar>
     </div>
    
  );
}

export default Catalog;
