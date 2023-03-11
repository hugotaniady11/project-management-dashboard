import React from 'react'
import { Button, Input, Link } from '../../components'

const Login = () => {
  return (
    <div class="flex justify-center items-center h-screen bg-kec-blue">
        <div class="w-96 p-6 shadow-lg bg-white rounded-md">
          <p class="text-3xl block text-center font-semibold">Hello, Welcome Back</p>
          <hr class="mt-3"></hr>
          <div class="mt-3"></div>
          
          <div>
                <div class="mt-3">
                <label for="email" class="block text-base mb-2">Email</label>
                <input type="text" id="username" class="border w-full text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Email" />
                </div>

                <div class="mt-3">
                <label for="Password" class="block text-base mb-2">Password</label>
                <input type="Password" id="Password" class="border w-full text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password" />
                </div>
            
                <div class="mt-3">
                <Button title="Login" />
                </div>
                <div class="mt-3">
                <label for="signup" class="block text-sm mb-2">not a member? <a href="#" class="text-blue-600"> Sign up now</a></label>
                </div>
          </div>
        
        </div>
    </div>
  )
}

export default Login
