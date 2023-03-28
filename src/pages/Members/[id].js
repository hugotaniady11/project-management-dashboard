import { getMemberById } from '../../utils/data'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Input } from '../../components';

const MemberId = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [formDisabled, setFormDisabled] = useState(true);



  useEffect(() => {
    const fetchMember = async () => {
      const res = await getMemberById(id); // pass the id parameter to the function
      setMember(res.data);

    
    };


    fetchMember();
  }, [id]);
  if (!member) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className='p-8 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 '>
        Member Id: {member.member_id}
      </div>


      <section className="p-8">
        <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <fieldset className="rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <Input label="Name" type="text" name="name" placeholder="Enter Name" defaultValue={member ? member.name : ''} disabled={formDisabled} />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input label="Email" type="email" name="email" placeholder="Enter Email" defaultValue={member ? member.email : ''} disabled={formDisabled} />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input label="Job Title" type="text" name="jobTitle" placeholder="Enter Job Title" defaultValue={member ? member.jobTitle : ''} disabled={formDisabled} />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Input label="Department" type="text" name="department" placeholder="Enter Department" defaultValue={member ? member.department : ''} disabled={formDisabled} />
              </div>
            </div>
          </fieldset>
        </form>

        { member.project_manager != 0 && (
          <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 p-8'>
          <h1>Project Handle :</h1>
          <div class="flex flex-col py-8">
            <div class="overflow-x-auto">
              <div class="inline-block min-w-full align-middle">
                <div class="overflow-hidden shadow">
                  <table class="min-w-full divide-y divide-gray-200 table-fixed ">
                    <thead class="bg-gray-100">
                      <tr>
                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                          Project Id
                        </th>
                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                          Name
                        </th>
                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                          Description
                        </th>
                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
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
