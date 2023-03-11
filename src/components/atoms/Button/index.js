import React from 'react'

const Button = ({title, ...rest}) => {
  return (
    <div>
      <button className='bg-kec-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' {...rest}>{title}</button>
    </div>
  )
}

export default Button
