import Card from "../Card/Card";

import p from "./../../img/photo3.jpg"  



const OrderDetails = () =>{
  return (
    <div className="m-4">
      <h1 className="text-center">Orders Details</h1>

      <div>
        <div className="row row-cols-2">
          <p className="h5">Order n1947034</p>
          <p className="text-end text-muted">05-12-2019</p>
        </div>
        <div className="row row-cols-2 mt-3">
          <p className="text-muted">Tracking number: IW3475453455</p>
          <p className="text-end text-success">Delivered</p>
        </div>
        
        <div className="mt-4">
          <p>3 items</p>
          
          <div>
            <Card photo={p} stars={4} clasification={'Dorothy Perkins'} 
                      name={"Evening Dress"} price={{"normal": 15, "less": 0}} 
                      option={{"color":"", "text":" "}} horizontal={true}></Card>
                    
            <Card photo={p} stars={4} clasification={'Dorothy Perkins'} 
                name={"Evening Dress"} price={{"normal": 15, "less": 12}} 
                option={{"color":"", "text":" "}} horizontal={true}></Card>
            
            <Card photo={p} stars={4} clasification={'Dorothy Perkins'} 
                name={"Evening Dress"} price={{"normal": 15, "less": 12}} 
                option={{"color":"", "text":" "}} horizontal={true}></Card>
          </div>
        </div>

        <div>
          <p className="h5">Order information</p>
          <div className="d-flex mt-3">
            <p className="text-muted">Shipping Address:</p>
            <p className="ms-3">3 Newbridge Court, Chino Hills</p>
          </div>
          <div className="d-flex mt-3">
            <p className="text-muted">Delivery method:</p>
            <p className="ms-3">FedEx, 3 days, 15$</p>
          </div>
          <div className="d-flex mt-3">
            <p className="text-muted">Discount:</p>
            <p className="ms-3">10%, Personal Promo code</p>
          </div> 
          <div className="d-flex mt-3">
            <p className="text-muted">Total Amount:</p>
            <p className="ms-3">103$</p>
          </div> 

          <div className="d-flex justify-content-center mt-4">
            <button className="btn border-black rounded-5 ps-5 pe-5">Reorder</button>
            <button className="btn btn-red ms-3 rounded-5 ps-5 pe-5">Leave feedback</button>
          </div>
        </div>
      </div>

    </div>
    
  );
}

export default OrderDetails;
