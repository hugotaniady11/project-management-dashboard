import { getProjectById } from '../../utils/data'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Input } from '../../components';
import moment from 'moment';


const ProjectId = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [formDisabled, setFormDisabled] = useState(true);

    const formatDate = (dateString) => {
        return moment(dateString).format('DD/MM/YYYY');
    }

    useEffect(() => {
        const fetchProject = async () => {
            const res = await getProjectById(id); // pass the id parameter to the function
            setProject(res.data);
        };
        fetchProject();
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <div className='p-8 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 '>
                Project Id: {project.project_id}
            </div>

            <section className="p-8">
                <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <fieldset className="rounded-md shadow-sm">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <Input label="Name" type="text" name="name" placeholder="Enter Name" defaultValue={project ? project.name : ''} disabled={formDisabled} />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <Input label="Status" type="text" name="status" placeholder="Enter Status" defaultValue={project ? project.status : ''} disabled={formDisabled} />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <Input label="Start Date" type="date" name="start_dates" placeholder="Enter Dates" defaultValue={project ? moment(project.start_dates).format('YYYY-MM-DD') : ''} disabled={formDisabled} />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <Input label="End Date" type="date" name="end_dates" placeholder="Enter Dates" defaultValue={project ? moment(project.end_dates).format('YYYY-MM-DD') : ''} disabled={formDisabled} />
                            </div>
                            <div className="col-span-full">
                                <label className='block text-base mb-2'>Description</label>
                                <textarea type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="neighborhood_information" defaultValue={project ? project.description : ''} disabled={formDisabled} />
                            </div>
                            <div className="col-span-full">
                                <label className='block text-base mb-2'>Project File</label>
                                <img type="file" accept="application/pdf" src={project.file} />
                            </div>
                        </div>
                    </fieldset>

                    <div className='py-8'>
                        <h1>Project Manager</h1>
                        <hr />
                        <div class="flex flex-col py-8">
                            <div class="overflow-x-auto">
                                <div class="inline-block min-w-full align-middle">
                                    <div class="overflow-hidden shadow">
                                        <table class="min-w-full divide-y divide-gray-200 table-fixed ">
                                            <thead class="bg-gray-100">
                                                <tr>
                                                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                                        Name
                                                    </th>
                                                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                                        Email
                                                    </th>
                                                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                                        Job Title
                                                    </th>
                                                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                                        Department
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200 ">
                                                <tr className="hover:bg-gray-100">
                                                    <td className="p-4 text-base text-gray-900 whitespace-nowrap "> {project.project_manager_id.name} </td>
                                                    <td className="p-4 text-base text-gray-900 whitespace-nowrap "> {project.project_manager_id.email} </td>
                                                    <td className="p-4 text-base text-gray-900 whitespace-nowrap "> {project.project_manager_id.jobTitle} </td>
                                                    <td className="p-4 text-base text-gray-900 whitespace-nowrap "> {project.project_manager_id.department} </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>

            </section>
        </>
    )
}

export default ProjectId
