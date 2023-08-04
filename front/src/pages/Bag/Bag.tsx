import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import mainPhoto from "./../../img/photo3.jpg"
import './Bag.css'
 
const Bag = () => {
  
  return (
    <div className="m-2">
      <h1>My bag</h1> 
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

      <div className="row m-5">
        <div className="col-6">
          <p className='text-muted'>Total amount:</p>
        </div>

        <div className="col-6 text-end">
          <p>124$</p>
        </div>
      </div>
      <div className='d-grid gap-2'>
        <button className='btn btn btn-danger text-uppercase rounded-5 p-3'>check out</button>
      </div>
      <div className="mb-5">.</div>

      <Navbar></Navbar>
    </div>
  );
}

export default Bag;
