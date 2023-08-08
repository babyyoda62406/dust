 
import { drawStars } from '../../Utils/Utils';
import './RatingReview.css'


 
const RatingReview = () => {
 

  return (
    <div className="m-3">
      <h1>Rating&Reviews</h1>
    
      <div className="row">
        <div className="col-4">
          <p className="h1">4.3</p>
          <p className="text-muted">23 ratings</p>
        </div>
        <div className="col-8">
          <div className="d-flex">
            <div className="d-flex">
              {drawStars(10)}
            </div>
            <div class="progress mb-3 w-100 mt-2 ms-2">
              <div class="progress-bar bg-danger text-dark w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
            <div>
              <p className="mt-1 ms-2">12</p>
            </div>
          </div>
        </div>
      </div>

      <h3>8 reviews</h3>
      
      <div className="m-3 p-3 bg-gray">
        <p className="h6">Helene Moore</p>
        <div className="row row-cols-2">
          <div>
            {drawStars(3)}
          </div>
          <div className="text-muted"><p>June 5, 2019</p></div>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi et atque ipsum voluptatem quibusdam, incidunt magni voluptate? In aut sequi voluptas accusantium ratione ducimus cumque quis quod? Ipsum, voluptas consequatur!</p>
        </div>
      </div>

      <div className="write">
        <button className="btn btn-red rounded-5"><span className="bi bi-pencil-fill me-2"></span> Write a review</button>
      </div>
    </div>
  );
}

export default RatingReview;
