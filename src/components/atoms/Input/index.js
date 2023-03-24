import React from 'react'

const Input = ({label, ...rest}) => {
  return (
    <div>
        <p className='block text-base mb-2'>{label}</p>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...rest} />
    </div>
  )
}

export default Input