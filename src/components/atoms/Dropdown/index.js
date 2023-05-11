import React from 'react'

const Dropdown = ({ label, ...rest }) => {
    return (
        <div >
            <p className='block text-base mb-2'>{label}</p>
            <select class="border w-full text-sm px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"{...rest} />
        </div>
    )
}

export default Dropdown