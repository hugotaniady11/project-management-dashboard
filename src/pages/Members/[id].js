import { getMemberById } from '../../utils/data'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MemberId = () => {
    const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      const response = await getMemberById(id); // pass the id parameter to the function
      setMember(response.data);
    };
  
    fetchMember();
  }, [id]);
    if (!member) {
        return <div>Loading...</div>;
      }

      console.log(member);
  return (
    <div>
      Detail page: {member.id}
    </div>
  )
}

export default MemberId
