import { useState } from 'react';

import { login } from '../../Services/auth';
import { Navigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Sign, State } from '../../types/types';

import Navbar from '../Navbar/Navbar';  
import * as React from 'react';



const SignIn:React.FC<Sign> = ({ change }) =>{
  const [state, setState] = useState<State>({
    redirect: null,
    username: "",
    password: "",
    loading: false,
    message: ""
  })

  if (state.redirect) {
    console.log("jpla")
    return <Navigate to={state.redirect + "ho"}></Navigate>
  }
  const initialValues = {
    username: "",
    password: "",
  };
  const submit = async (e:any) => {
    const ss: any = {
      message: "",
      loading: true
    }
    setState(ss)

    type res = {
      name: string
      pasw: string
    }
    const data: res = {
        name: e.username,
        pasw: e.pasword,
    }
  
    try {
        const response: any = await login(data.name, data.pasw)

        localStorage.setItem("token-d", response.token)

        const s: any = {
          redirect: "profile"
        }
        setState(s)
    } catch (error: any) {
      const resMessage: string =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
 
        setState({
          ...state,
          message: resMessage
        })
    }
  }
  const { loading, message } = state
  
  const forgot = () => {
    change(2)
  } 
  const dontHave = () => {
    change(1)
  } 
  
  return (
    <div className="col-md-12">
      <h1 className="m-3">Login</h1>
    
      <div className="card card-container mt-5"> 

        <Formik
          initialValues={initialValues} 
          onSubmit={submit}
        >
          <Form>
            <div className="form-group m-4">
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" className="form-control" />
              <ErrorMessage
                name="username"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group m-4">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>
            
            <div className="m-4 d-flex justify-content-end cursor" onClick={() => forgot()}>
              <p>Forgot your password?</p>
              <span className="bi bi-arrow-right text-red ms-2 icon-size-lr"></span>
            </div>
            <div className="m-4 d-flex justify-content-end cursor" onClick={() => dontHave()}>
              <p>Dont have an account?</p>
              <span className="bi bi-arrow-right text-red ms-2 icon-size-lr"></span>
            </div>

            <div className="form-group m-4 d-grid gap-2"> 
              <button type="submit" className="btn btn btn-red text-uppercase rounded-5 p-3" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>

      <Navbar/>
    </div>
    
  );
}

export default SignIn;
