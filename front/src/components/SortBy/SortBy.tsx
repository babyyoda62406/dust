import './SortBy.css'


 
const SortBy = () => {
  return (
    <div className="">
      <h2 className="text-center m-3">Sort by</h2>
      <div className="option-sort cursor">
        <p>Popular</p>
      </div>
      <div className="option-sort cursor">
        <p>Newest</p>
      </div>
      <div className="option-sort cursor">
        <p>Customer review</p>
      </div>
      <div className="option-sort cursor selected-sort">
        <p>Price: lowest to high</p>
      </div>
      <div className="option-sort cursor">
        <p>Price highest to low</p>
      </div>
    </div>
  );
}

export default SortBy;
