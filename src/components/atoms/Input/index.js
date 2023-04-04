import React from 'react'

const Input = ({label, ...rest}) => {
  return (
    <div>
        <p className='block text-base mb-2'>{label}</p>
        <input className="border w-full text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" as='select' type='select'{...rest} />
    </div>
  )
}

export default Input