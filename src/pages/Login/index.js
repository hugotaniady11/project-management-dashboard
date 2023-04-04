import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '../../components';
import { httpClient } from '../../utils/data';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
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
          .post(`api/login`, values)
          .then((res) => {
            if(res.data.accessToken) {
              localStorage.setItem("user", res.data.refreshToken);
            }
            return res.data;
          })
          navigate('/');
          window.location.reload();
      } catch (error) {
        setError(error.response.data.message);
      }
      // Panggil API login di sini dan verifikasi kredensial pengguna
    },
  });

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-kec-blue">
        <form className="w-96 p-6 shadow-lg bg-white rounded-md" onSubmit={formik.handleSubmit}>
        {error && <div className="text-sm text-red-600 text-center">{error}</div>}
          <p className="text-3xl block text-center font-semibold">Login</p>
          <hr className="mt-3" />
          <div className='mt-3'>
            <Input label="Email" id='email' name='email' type='email' placeholder='Enter Email' onChange={formik.handleChange} value={formik.values.email} />
          </div>
          {formik.errors.email && <p className="text-sm text-red-600">{formik.errors.email}</p>}

          <div className='mt-3'>
            <Input label="Password" id='password' name='password' type='password' placeholder='Enter Password' onChange={formik.handleChange} value={formik.values.password} />
          </div>
          {formik.errors.password && <p className="text-sm text-red-600">{formik.errors.password}</p>}
          
          <div className="mt-3">
            <Button id="login" title="Login" />
          </div>

          <div class="mt-3">
            <label for="signup" class="block text-sm mb-2">not a member? <a href="/register" class="text-blue-600"> Sign up now</a></label>
            <input type="signup" name="signup" />

          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
