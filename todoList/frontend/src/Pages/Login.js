import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const initialValues = {
    Email: '',
    Password: '',
  };

  const validationSchema = Yup.object({
    Email: Yup.string().email('Invalid Email address').required('Email is required'),
    Password: Yup.string().required('Password is required'),
  });

  const onSubmit = async (values) => {
    try {
      const res = await axios.post('http://localhost:5000/Login', {
        Email: values.Email,
        Password: values.Password,
      });

      if (res.data.success === true) {
        localStorage.setItem('loggedin', true);
        localStorage.setItem('token', res.data.token);
        navigate('/Home');
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {

      console.error('Error during login:', error);
      toast.error('An error occurred during login.');
    }
  };

  return (
    <div className='frombody'>
      <h4>Please Login</h4>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div>
            <label htmlFor="Email">Email : </label>
            <Field type="text" name="Email" id="Email" placeholder='Enter your Email' />
            <ErrorMessage name="Email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="Password">Password : </label>
            <Field type="text" name="Password" id="Password" placeholder='Enter your Password' />
            <ErrorMessage name="Password" component="div" className="error" />
          </div>
          <div className='forget'><a href='forget'>Forget Password ?</a>
          </div>
          <button type="submit">Login</button>
          <div className='loginbeforeregister'>
            Please Signup <a href='singup'>Signup!</a>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;

















































































