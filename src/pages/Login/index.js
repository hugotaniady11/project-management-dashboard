import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from '../../components'


function Login() {
  const initialValues = { email: "", password: "" };
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
      navigate("/");
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

    <div class="flex justify-center items-center h-screen bg-kec-blue">
      <form class="w-96 p-6 shadow-lg bg-white rounded-md" onSubmit={handleSubmit}>
        <p class="text-3xl block text-center font-semibold">Hello, Welcome Back</p>
        <hr class="mt-3"></hr>
        <div class="mt-3"></div>
          </div>
          <p class='text-sm text-red-600'>{formErrors.email}</p>


          <div class="mt-3">
            <Input label="Password" type="password" name="password" placeholder="Enter Password" value={formValues.Password} onChange={handleChange} />
          </div>
          <p class='text-sm text-red-600'>{formErrors.password}</p>

          <div class="mt-3">
            <Button onClick={handleNavigate} id="submit" title="Login" />

          </div>
          <div class="mt-3">
            <label for="signup" class="block text-sm mb-2">not a member? <a href="/register" class="text-blue-600"> Sign up now</a></label>
            <input type="signup" name="signup" />

          </div>
        </div>

      </form>
    </div>
  )
}

export default Login
