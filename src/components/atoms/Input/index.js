import React from 'react'

const Input = ({label, ...rest}) => {
  return (
    <div className="flex flex-col md:mr-16">
        <p className='label'>{label}</p>
        <input className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" {...rest} />
    </div>
  )
}

export default Input
