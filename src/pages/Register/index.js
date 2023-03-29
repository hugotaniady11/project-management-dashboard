import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { Input, Button } from '../../components';
import { httpClient } from '../../utils/data';


function Register() {
  const baseUrl = process.env.REACT_APP_KEWO_API;

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      username: '',
      email:'',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().min(5, 'Username minimal 5 characters long').required('Required'),
      email: Yup.string().email().required('Required'),
      password: Yup.string()
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .required('Required')
    }),
    onSubmit: async(values) => {
      try {
        await httpClient
          .post(`api/register`, values)
          .then((res) => {
            if(res.data.accessToken) {
              localStorage.setItem("user", res.data.accessToken);
            }

            return res.data;
          })
          navigate('/login');
      } catch (error) {
        setError(error.response.data.message);
      }
      // Panggil API login di sini dan verifikasi kredensial pengguna
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-kec-blue">
      <form className="w-96 p-6 shadow-lg bg-white rounded-md" onSubmit={formik.handleSubmit}>
        {error && <div className="text-sm text-red-600 text-center">{error}</div>}
        <p className="text-3xl block text-center font-semibold">Register</p>
        <hr className="mt-3"></hr>

        <div className="mt-3">
          <Input label="Username" type="text" name="username" placeholder="Enter Username" onChange={formik.handleChange} value={formik.values.username} />
        </div>
        {formik.errors.username && <p className="text-sm text-red-600">{formik.errors.username}</p>}

        <div className="mt-3">
          <Input label="Email" type="email" name="email" placeholder="Enter Email" onChange={formik.handleChange} value={formik.values.email} />
        </div>
        {formik.errors.email && <p className="text-sm text-red-600">{formik.errors.email}</p>}

        <div className="mt-3">
        <Input label="Password" type="password" name="password" placeholder="Enter Password" onChange={formik.handleChange} value={formik.values.password} />
        </div>
        {formik.errors.password && <p className="text-sm text-red-600">{formik.errors.password}</p>}

        <div className="mt-3">
          <Button id="register" title="Register" />
        </div>
        <div className="mt-3">
          <label for="signup" className="block text-sm mb-2">Already a member? <a href="/login" className="text-blue-600"> Sign In</a></label>
          <input type="signup" name="signup" />
        </div>
      </form>
    </div>
  )
}


export default Register;
