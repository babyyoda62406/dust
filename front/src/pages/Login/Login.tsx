import { useState } from 'react';

import { login } from '../../Services/auth';
import { Navigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { State } from '../../types/types';

import Navbar from '../../components/Navbar/Navbar'; 

const Login = () =>{
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

 console.log(state)
  
  return (
    <div className="col-md-12">
        <div className="card card-container"> 

          <Formik
            initialValues={initialValues} 
            onSubmit={submit}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field name="username" type="text" className="form-control" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className="form-control" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
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

        <Navbar></Navbar>
      </div>
    
  );
}

export default Login;
