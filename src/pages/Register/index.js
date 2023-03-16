import { react, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from '../../components'

function Register() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  const navigate = useNavigate();

  function handleNavigate() {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/login");
    }
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };



  return (

    <div className="flex justify-center items-center h-screen bg-kec-blue">
      <pre className='hidden'>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form className="w-96 p-6 shadow-lg bg-white rounded-md" onSubmit={handleSubmit}>
        <p className="text-3xl block text-center font-semibold">Register</p>
        <hr className="mt-3"></hr>

        <div className="mt-3">
          <Input label="Username" type="text" name="username" placeholder="Enter Username" value={formValues.username} onChange={handleChange} />
        </div>
        <p className='text-sm text-red-600'>{formErrors.username}</p>

        <div className="mt-3">
          <Input label="Email" type="email" name="email" placeholder="Enter Email" value={formValues.email} onChange={handleChange} />
        </div>
        <p className='text-sm text-red-600'>{formErrors.email}</p>

        <div className="mt-3">
        <Input label="Password" type="password" name="password" placeholder="Enter Password" value={formValues.password} onChange={handleChange} />
        </div>
        <p className='text-sm text-red-600'>{formErrors.password}</p>

        <div className="mt-3">
          <Button onClick={handleNavigate} id="register" title="Register" />
        </div>
        <div className="mt-3">
          <label for="signup" className="block text-sm mb-2">Already a member? <a href="/login" className="text-blue-600"> Sign In</a></label>
          <input type="signup" name="signup" />
        </div>
      </form>
    </div>
  )
}


export default Register
