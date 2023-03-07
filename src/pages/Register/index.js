import { Button, Input, Link } from '../../components'
import React from 'react'

const Register = () => {
  return (
    <div className='container mx-auto'>
        Register page
        <p>Register</p>
        <Input label="Fullname" placeholder="Full Name" type="text"/>
        <Input label="Email" placeholder="Email" type="email"/>
        <Input label="Password" placeholder="Password" type="password"/>
        <Button title="register" />
        <Link title="Already have an account?"/>
    </div>
  )
}

export default Register
