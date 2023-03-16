import React from 'react'
import { getAllMembers } from '../../utils/data'
import { useEffect, useState } from 'react';

const Home = () => {
  const [members, setMembers] = useState([])

  useEffect(() => {
    getAllMembers().then((result) =>{
      setMembers(result)
    })
  }, [])
  console.log(members);
  return (
    <div>
        Home page
    </div>
  )
}

export default Home
