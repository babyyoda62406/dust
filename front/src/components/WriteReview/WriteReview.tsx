 
const WriteReview = () =>{
  
  return (
    <div className="m-4">
      <h2 className="text-center me-4 ms-4">Please share your opinion about the product</h2>

      <div className="d-flex justify-content-center">
        <form action="">
          <p>Your Review</p>
          <textarea name="text" className="form-control" id="text" cols="50" rows="10"></textarea>

          <div className="form-group m-4 d-grid gap-2"> 
            <button type="submit" className="btn btn btn-red text-uppercase rounded-5 p-3">
              Send Review
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default WriteReview;
