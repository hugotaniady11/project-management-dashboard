import React from 'react'
import { getAllMembers, deleteMember } from '../../utils/data'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Members = () => {

    const [members, setMembers] = useState([])

    useEffect(() => {
        getAllMembers().then((result) => {
            setMembers(result)
        })
    }, [])



        function deleteMemberById(member_id) {
            return swal({
                title: "Do you want to delete member?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((res) => {
                    if (res) {
                        return deleteMember(member_id)
                            .then(() => { swal(`Success! Member ID: ${member_id} has been deleted`, { icon: 'success' }) })
                            .then(() => { window.location.reload(false) })
                            .catch((e) => {
                                console.error(e);
                                swal(`Failed to delete member`, { icon: 'error' });
                            });
                    }
                });
        }

    return (
        <>
            <div class="p-8 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 ">
                <div class="w-full mb-1">
                    <div class="mb-4">
                        <nav class="flex mb-5" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                                <li class="inline-flex items-center">
                                    <a href="#" class="inline-flex items-center text-gray-700 hover:text-primary-600 ">
                                        <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                        <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 ">Members</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                        <span class="ml-1 text-gray-400 md:ml-2" aria-current="page">List</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl ">All Members</h1>
                    </div>
                    <div class="sm:flex">
                        <div class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 ">
                            <form class="lg:pr-3" action="#" method="GET">
                                <label for="users-search" class="sr-only">Search</label>
                                <div class="relative mt-1 lg:w-64 xl:w-96">
                                    <input type="text" name="email" id="users-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Search for users" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col m-8">
                <div class="overflow-x-auto">
                    <div class="inline-block min-w-full align-middle">
                        <div class="overflow-hidden shadow">
                            <table class="min-w-full divide-y divide-gray-200 table-fixed ">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th scope="col" class="p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " />
                                                <label for="checkbox-all" class="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Member Id
                                        </th>
                                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Name
                                        </th>
                                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Job Title
                                        </th>
                                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Department
                                        </th>
                                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 ">
                                    {members.map((member) => (
                                        <tr className="hover:bg-gray-100" key={member.member_id}>
                                            <td className="w-4 p-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-{{ member.id }}" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " />
                                                    <label for="checkbox-{{ member.id }}" className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap "> {member.member_id} </td>
                                            <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                                                <img className="w-10 h-10 rounded-full" src="https://www.radiovenusfm.com/wp-content/uploads/2019/01/portrait-square-10.jpg" alt="avatar" />

                                                <div className="text-sm font-normal text-gray-500 ">
                                                    <div className="text-base font-semibold text-gray-900 "> {member.name} </div>
                                                    <div className="text-sm font-normal text-gray-500 "> {member.email} </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap "> {member.jobTitle} </td>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap "> {member.department} </td>

                                            <td className="p-4 space-x-2 whitespace-nowrap">
                                                <Link to={`/members/${member.member_id}`}>
                                                    <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                                                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                                        Edit user
                                                    </button>
                                                </Link>
                                                <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                                                onClick={()=>deleteMemberById(member.member_id)}
                                                >
                                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                                    Delete user
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between ">
                <div className="flex items-center mb-4 sm:mb-0">
                    <a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    <span className="text-sm font-normal text-gray-500">Showing <span class="font-semibold text-gray-900 ">1-20</span> of <span class="font-semibold text-gray-900 ">2290</span></span>
                </div>
                <div className="flex items-center space-x-3">
                    <a href="#" class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                        <svg class="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        Previous
                    </a>
                    <a href="#" class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                        Next
                        <svg class="w-5 h-5 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Members
