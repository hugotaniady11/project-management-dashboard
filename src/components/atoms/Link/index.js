import React from 'react'

const Link = ({title, onClick}) => {
  return (
    <div>
        <p onClick={onClick}>{title}</p>
    </div>
  )
}

export default Link
