

const MyOrders = () =>{
  return (
    <div className="">
      <h1 className="m-4">My Orders</h1>
      <div className="d-flex m-4">
        <div className="bg-black rounded-5 text-light p-2 pe-4 ps-4 me-3">
          <p>Delivered</p>
        </div>
        <div className="rounded-5  p-2 pe-4 ps-4 me-3">
          <p>Processing</p>
        </div>
        <div className="rounded-5  p-2 pe-4 ps-4 me-3">
          <p>Cancelled</p>
        </div>
      </div>
      <div className="p-4 bg-gray">
        <div className="row row-cols-2">
          <p className="h5">Order n1947034</p>
          <p className="text-end text-muted">05-12-2019</p>
        </div>
        <div className="row row-cols-2 mt-3">
          <p className="text-muted">Tracking number: IW3475453455</p>
        </div>
        <div className="row row-cols-2 mt-3">
          <div>
            <span className="text-muted me-2">Quantity:</span>
            <span className="h5">3</span>
          </div>
          <div>
            <span className="text-muted me-2">Total Amount:</span>
            <span className="h5">34$</span>
          </div>
        </div>

        <div className="d-flex justify-content-around mt-4">
          <button className="btn border-black rounded-5 ps-5 pe-5">Details</button>
          <p className="text-end text-success mt-1">Delivered</p>
        </div>
        
        
      </div>

    </div>
    
  );
}

export default MyOrders;
