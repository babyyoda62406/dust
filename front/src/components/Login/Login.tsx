import { useState } from 'react';

import { login } from '../../Services/auth';
import { Navigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { State } from '../../types/types';

import Navbar from '../../components/Navbar/Navbar'; 
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

const Login = () =>{
  const [state, setState] = useState<number>(0) 
  
  return (
    <div className="">
      { state == 0 ? <SignIn change={setState}/> : <SignUp change={setState}/>}
      <div className="m-5">
        <p className="text-center">Or sign up with social account</p>
        <div className="m-4 d-flex justify-content-evenly">
          <span className="bi bi-google icon-size cursor"></span>
          <span className="bi bi-facebook icon-size cursor text-primary"></span>
        </div>
      </div>
      <Navbar/>
    </div>
    
  );
}

export default Login;
