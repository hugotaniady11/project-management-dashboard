import React from 'react'
import { getAllMembers, deleteMember, getCurrentUser } from '../../utils/data'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [page, setPage] = useState(1);
    const recordsPerPage = 7;
    const lastIndex = page * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = members.slice(firstIndex, lastIndex);
    const npage = Math.ceil(members.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1);
    const baseUrl = process.env.REACT_APP_KEWO_API;

    const user = getCurrentUser();
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
                                    {records.map((data) => (
                                        <tr className="hover:bg-gray-100" key={data.member_id}>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap "> {data.member_id} </td>
                                            <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                                                <img className="w-10 h-10 rounded-full" src={`${baseUrl}/${data.image}`} alt={data.name} />

                                                <div className="text-sm font-normal text-gray-500 ">
                                                    <div className="text-base font-semibold text-gray-900 "> {data.name} </div>
                                                    <div className="text-sm font-normal text-gray-500 "> {data.email} </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap "> {data.jobTitle} </td>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap "> {data.department} </td>

                                            {user.account_type === 'SUPER_ADMIN' || user.account_type === 'ADMIN' ? (
                                                <td className="p-4 space-x-2 whitespace-nowrap">
                                                <Link to={`/members/${data.member_id}`}>
                                                    <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                                                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                                        Edit user
                                                    </button>
                                                </Link>
                                                <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                                                    onClick={() => deleteMemberById(data.member_id)}
                                                >
                                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                                    Delete user
                                                </button>
                                            </td>
                                            ) : (
                                                <td className="p-4 space-x-2 whitespace-nowrap">
                                                <Link to={`/members/${data.member_id}`}>
                                                    <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                                                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                                        See Details
                                                    </button>
                                                </Link>
                                            </td>
                                            )}
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
             <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between ">
                <div className="flex items-center space-x-3">
                </div>
                <div className="inline-flex -space-x-px mb-4 sm:mb-0">
                    <ul className='inline-flex -space-x-px'>
                        <li className='page-item'>
                            <a 
                            href="#" 
                            className='px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700' 
                            onClick={prePage}>Prev</a>
                        </li>
                        {
                            numbers.map((n, i) => (
                                <li className={`page-item ${page === n ? 'active' : '' }`} key={i}>
                                    <a href='#' className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700' onClick={() => changeCPage(n)}>{n}</a>
                                </li>
                            ))
                        }
                        <li className='page-item'>
                            <a href="#" className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ' onClick={nextPage}>Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )

    function prePage() {
        if(page !== 1) {
            setPage(page - 1)
        }
        
    }
    function changeCPage(id) {
        setPage(id)
        
    }
    function nextPage() {
        if(page !== npage) {
            setPage(page + 1)
        }

    }
}

export default Members
