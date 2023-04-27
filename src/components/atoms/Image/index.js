import React from 'react'

const Image = ({label, image, ...rest}) => {
  return (
    <div>
       <p className='block text-base mb-2'>{label}</p>
        <div className='mb-2'>
          <img src={image} className='w-20 h-20 object-cover rounded-full' alt="files" {...rest} />
        </div>
    </div>
  )
}

export default Image