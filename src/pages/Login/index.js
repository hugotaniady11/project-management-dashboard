import React from 'react'
import { Button, Input, Link } from '../../components'

const Login = () => {
  return (
    <div className='container mx-auto'>
        <p>Hello, Welcome Back</p>
        <Input label="Email" placeholder="Email" type="email"/>
        <Input label="Password" placeholder="Password" type="password"/>
        <Button title="Login" />
        <Link title="Register Now"/>
    </div>
  )
}

export default Login
