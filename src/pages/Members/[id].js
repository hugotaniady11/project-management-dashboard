import { getMemberById, updateMember, getCurrentUser } from '../../utils/data'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Input, Button, Dropdown, Image } from '../../components';
import swal from 'sweetalert';


const MemberId = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const user = getCurrentUser();
  const depart = ["Engineering", "Project Management", "Drafter", "Marketing"];
  
  console.log(user)


  const renderSelect = (arr, selectedVal) => {
    return (
      <>
        <option value="" disabled>Pilih satu</option>
        {
          arr.length && arr.map((val) => {
            const value = val.id ? val.id : val
            return (<option key={val.id} value={val.id || val} selected={value === selectedVal} >{val.name || val}</option>)
          })
        }
      </>
    )
  }
  const [formDisabled, setFormDisabled] = useState(true);
  const baseUrl = process.env.REACT_APP_KEWO_API;

  useEffect(() => {
    const fetchMember = async () => {
      const res = await getMemberById(id); // pass the id parameter to the function
      setMember(res.data);
    };
    fetchMember();
    if (user.account_type === 'SUPER_ADMIN') setFormDisabled(false);
  }, [id]);

  const handleUpdateMember = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries())
    const payload = { ...formDataObj, };
    const formPayload = new FormData();
    Object.entries(payload).forEach(([key, val]) => formPayload.append(key, val));

    return updateMember(id, formPayload)
      .then(() => { swal(`Success! Member ID: ${id} has been updated`, { icon: 'success' }) })
      .then(() => { setTimeout(() => {
        window.location.reload();
      }, 2000)})
      .catch((e) => {
        console.error(e.response.data.message);
        
        swal(`Failed: ${e.response.data.message}`, { icon: 'error' });
      });

  }

  if (!member) {
    return <div>Loading...</div>;
  }

  

  return (
    <>
      <div className='p-8 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 '>
        Member Id: {member.member_id}
      </div>

    <section className="p-8">
        <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => handleUpdateMember(e)}>
          <fieldset className="rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
                <Image label="Picture" placeholder="Enter Picture" src={`${baseUrl}/${member.file}`} />
              </div>
              <div></div>
              <div className="col-span-full sm:col-span-3">
                <Input label="Name" type="text" name="name" placeholder="Enter Name" defaultValue={member ? member.name : ''} disabled={formDisabled} />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input label="Email" type="email" name="email" placeholder="Enter Email" defaultValue={member ? member.email : ''} disabled={formDisabled}/>
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input label="Job Title" type="text" name="jobTitle" placeholder="Enter Job Title" defaultValue={member ? member.jobTitle : ''} disabled={formDisabled}/>
              </div>
              <div className="col-span-full sm:col-span-3">
                <Dropdown label="Department"  name="department" defaultValue={member && member.department} disabled={formDisabled}>
                  {renderSelect(depart, member && member.department)}
                </ Dropdown>
              </div>
            </div>
          </fieldset>
          {user.account_type === 'SUPER_ADMIN' ? (
            <div className='py-4'>
            <Button id="login" title="Submit" />
          </div>
          ) : ("")}
          
        </form>

        {member.project_manager !== 0 && (
          <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 p-8'>
            <h1>Project Handle :</h1>
            <div className="flex flex-col py-8">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden shadow">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                      <thead className="bg-gray-100">
                        <tr>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                            Project Id
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                            Name
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                            Description
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 ">
                        {member.project_manager.map((project) => (
                          <tr className="hover:bg-gray-100">
                            <td className="p-4 text-base text-gray-900 whitespace-nowrap "> {project.project_id} </td>
                            <td className="p-4 text-base text-gray-900 whitespace-nowrap "> {project.name} </td>
                            <td className="p-4 text-base text-gray-900 whitespace-nowrap "> {project.description} </td>
                            <td className="p-4 text-base text-gray-900 whitespace-nowrap "> {project.status} </td>
                          </tr>
                        ))}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


      </section>
      

    </>
  )
}

export default MemberId
