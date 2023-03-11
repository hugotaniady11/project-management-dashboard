import { Button, Input, Link } from '../../components'
import React from 'react'

const Register = () => {
  return (

    <div class="flex justify-center items-center h-screen bg-kec-blue">
      <div class="w-96 p-6 shadow-lg bg-white rounded-md">
          <p class="text-3xl block text-center font-semibold">Register</p>
          <hr class="mt-3"></hr>
          <div class="mt-3">
                <label for="username" class="block text-base mb-2">Username</label>
                <input type="text" id="username" class="border w-full text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username" />
            </div>
            <div class="mt-3">
                <label for="email" class="block text-base mb-2">Email</label>
                <input type="email" id="email" class="border w-full text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Email" />
            </div>
            <div class="mt-3">
                <label for="password" class="block text-base mb-2">Password</label>
                <input type="password" id="password" class="border w-full text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 " placeholder="Enter Password" />
            </div>
            <div class="mt-3">
            <Button title="Register" />
            </div>
            <div class="mt-3">
                <label for="signup" class="block text-sm mb-2">Already a member? <a href="#" class="text-blue-600"> Sign In</a></label>
            </div>
      </div>
     </div>
  )
}

export default Register
