 
import Navbar from '../../components/Navbar/Navbar'; import Slider from '../../components/Slider/Slider';

import Login from '../../components/Login/Login';

import photo from '../../img/photo3.jpg'

import './Profile.css'
 
 
const Profile = () => {  
  const status: string = "d"
  if (!status) {
    return (
      <>
        <Login/>
      </>
    )
  }
  
  return (
    <div className="m-3">
      <h1>My Profile</h1> 
      <div className="d-flex flex-wrap">
        <div className="me-3">
          <img src={photo} className="img-profile"  alt="" />   
        </div>
        
        <div>
          <p className="h4 m-0">Matilda Brown</p>
          <p className="text-muted">matildabronw@mail.com</p>
        </div>
      </div>

      <div className="row mt-5 cursor">
        <div className="col-11">
          <p className="h5 m-0">My orders</p>
          <p className="text-muted">Already have 12 orders</p>
        </div>

        <div className="col-1 mt-3 size-arrow d-flex justify-content-end">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="20" height="20" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </div>
      </div>

      <div className="fine-divider"></div>

      <div className="row mt-5 cursor">
        <div className="col-11">
          <p className="h5 m-0">Shiping addresses</p>
          <p className="text-muted">3 ddresses</p>
        </div>

        <div className="col-1 mt-3 size-arrow d-flex justify-content-end">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="20" height="20" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </div>
      </div>

      <div className="fine-divider"></div>

      <div className="row mt-5 cursor">
        <div className="col-11">
          <p className="h5 m-0">Payments Methods</p>
          <p className="text-muted">Visa **34</p>
        </div>

        <div className="col-1 mt-3 size-arrow d-flex justify-content-end">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="20" height="20" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </div>
      </div>

      <div className="fine-divider"></div>

      <div className="row mt-5 cursor">
        <div className="col-11">
          <p className="h5 m-0">Promocodes</p>
          <p className="text-muted">You have special promocodes</p>
        </div>

        <div className="col-1 mt-3 size-arrow d-flex justify-content-end">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="20" height="20" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </div>
      </div>

      <div className="fine-divider"></div>
      
      <div className="row mt-5 cursor">
        <div className="col-11">
          <p className="h5 m-0">My reviews</p>
          <p className="text-muted">Reviews for 4 items</p>
        </div>

        <div className="col-1 mt-3 size-arrow d-flex justify-content-end">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="20" height="20" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </div>
      </div>

      <div className="fine-divider"></div>

      <div className="row mt-5 cursor">
        <div className="col-11">
          <p className="h5 m-0">Settings</p>
          <p className="text-muted">Notifications, password</p>
        </div>

        <div className="col-1 mt-3 size-arrow d-flex justify-content-end">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="20" height="20" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </div>
      </div>

      <div className="fine-divider"></div>

      <Navbar/>
    </div>
    
  );
}

export default Profile;
