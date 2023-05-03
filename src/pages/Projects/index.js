import React from 'react'
import { getAllProjects, getCurrentUser } from '../../utils/data'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../../components';

const Products = () => {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [search, setSearch] = useState("");
    // const baseUrl = process.env.REACT_APP_KEWO_API;

    const user = getCurrentUser();
    useEffect(() => {
        getAllProjects().then((res) => {
            setProjects(res)
        })
    }, [])

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);
    const paginationButtons = [];
    for (let i = 1; i <= Math.ceil(projects.length / itemsPerPage); i++) {
        paginationButtons.push(
            <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={i === currentPage ? "px-3 py-2 leading-tight text-gray-500 bg-gray-100 border border-gray-300 hover:bg-gray-100 hover:text-gray-700" : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}
            >
                {i}
            </button>
        );
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };
    const datas = currentItems.filter((data) => {
        return search.toLowerCase() === ''
            ? data
            : data.name.toLowerCase().includes(search);
    }
    );

    return (
        <>
            <div className="p-8 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 ">
                <div className="w-full mb-1">
                    <div className="mb-4">
                        <nav className="flex mb-5" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                                <li className="inline-flex items-center">
                                    <a href="#" className="inline-flex items-center text-gray-700 hover:text-primary-600 ">
                                        <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        <a href="#" className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 ">Projects</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        <span className="ml-1 text-gray-400 md:ml-2" aria-current="page">List</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">All Projects</h1>
                    </div>
                    <div className="sm:flex">
                        <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 ">
                            <div className="relative mt-1 lg:w-64 xl:w-96">
                                <SearchBar value={search} onChange={handleChange} />
                            </div>
                            <div className="flex pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0">
                                <a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                                </a>
                                <a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                </a>
                                <a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                </a>
                                <a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                            <a href="#" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto ">
                                <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>
                                Export
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col m-8">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Product ID
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Product Name
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Description
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Status
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 ">
                                    {datas.map((data) => (
                                        <tr className="hover:bg-gray-100 ">
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">{data.project_id}</td>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap "> {data.name} </td>
                                            <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs "> {data.description} </td>
                                            <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center">
                                                    {data.status === "Done" ? (
                                                        <><div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div><p className='text-gray-500'>{data.status}</p></>
                                                    ) : data.status === "Pending" ? (
                                                        <><div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div><p className='text-gray-500'>{data.status}</p></>
                                                    ) : (
                                                        <><div className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></div><p className='text-gray-500'>{data.status}</p></>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-4 space-x-2 whitespace-nowrap">
                                                <Link to={`/projects/${data.project_id}`}>
                                                    <button type="button" data-modal-toggle="edit-user-modal" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path></svg>
                                                        Update
                                                    </button>
                                                </Link>

                                                <button type="button" data-modal-toggle="delete-user-modal" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 ">
                                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                                    Delete Item
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
                <div className="flex items-center space-x-3">
                </div>
                <div className="inline-flex -space-x-px mb-4 sm:mb-0">
                {paginationButtons}
                </div>
            </div>
        </>
    )
}

export default Products
