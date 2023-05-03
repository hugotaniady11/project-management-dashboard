import React from 'react'
import { getAllMembers, deleteMember, getCurrentUser, createMember } from '../../utils/data'
import { Input, Button, Dropdown, SearchBar } from '../../components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useFormik } from 'formik';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [search, setSearch] = useState("");
    const depart = ["Engineering", "Project Management", "Drafter", "Marketing"];
    // const baseUrl = process.env.REACT_APP_KEWO_API;

    const user = getCurrentUser();
    useEffect(() => {
        getAllMembers().then((result) => {
            setMembers(result)
        })
    }, [])

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = members.slice(indexOfFirstItem, indexOfLastItem);
    const paginationButtons = [];
    for (let i = 1; i <= Math.ceil(members.length / itemsPerPage); i++) {
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
    const markets = currentItems.filter((data) => {
        return search.toLowerCase() === ''
            ? data
            : data.name.toLowerCase().includes(search);
    }
    );

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            department: '',
            jobTitle: '',
            file: '',
        },
        onSubmit: async (values) => {
            await createMember(values)
            swal(`Success! Member has been created`, { icon: 'success' })
            formik.setFieldValue("name", "");
            formik.setFieldValue("email", "");
            formik.setFieldValue("department", "");
            formik.setFieldValue("jobTitle", "");
            formik.setFieldValue("file", "");
            window.location.reload(false)
        },
    })

    const handleFormMember = (e) => {
        formik.setFieldValue(e.target.name, e.target.value)
    }

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
            <div className="p-8 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 ">
                <div className="w-full mb-1">
                    <div className="mb-4">
                        <nav className="flex mb-5" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                                <li className="inline-flex items-center">
                                    <a href="/#" className="inline-flex items-center text-gray-700 hover:text-primary-600 ">
                                        <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        <a href="/#" className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 ">Members</a>
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
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">All Members</h1>
                    </div>
                    <div className="sm:flex">
                        <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 ">
                            <div className="relative mt-1 lg:w-64 xl:w-96">
                                <SearchBar value={search} onChange={handleChange} />
                            </div>
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
                                            Member Id
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Name
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Job Title
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Department
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase ">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 ">
                                    {markets.map((data) => (
                                        <tr className="hover:bg-gray-100" key={data.member_id}>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap "> {data.member_id} </td>
                                            <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                                                <img className="w-10 h-10 rounded-full" src={`{data.file}`} alt={data.name} />

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
                                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path></svg>
                                                            Edit user
                                                        </button>
                                                    </Link>
                                                    <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                                                        onClick={() => deleteMemberById(data.member_id)}
                                                    >
                                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                                        Delete user
                                                    </button>
                                                </td>
                                            ) : (
                                                <td className="p-4 space-x-2 whitespace-nowrap">
                                                    <Link to={`/members/${data.member_id}`}>
                                                        <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path></svg>
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
                    {paginationButtons}
                </div>
            </div>
            {
                user.account_type === 'SUPER_ADMIN' || user.account_type === 'ADMIN'
                    ?
                    (
                        <div className="p-8 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 ">
                            <div className="w-full mb-1">
                                <div className="mb-4">
                                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">Add Members</h1>
                                </div>
                                <div className="items-center mb-3  sm:divide-gray-100 sm:mb-0 ">
                                    <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                                        <fieldset className="rounded-md shadow-sm">
                                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                                <div className="col-span-full">
                                                    <Input label="Name" type="text" name="name" placeholder="Enter Name" onChange={handleFormMember} value={formik.values.name} />
                                                </div>
                                                <div className="col-span-full">
                                                    <Input label="Email" type="email" name="email" placeholder="Enter Email" onChange={handleFormMember} value={formik.values.email} />
                                                </div>
                                                <div className="col-span-full">
                                                    <Input label="Job Title" type="text" name="jobTitle" placeholder="Enter Job Title" onChange={handleFormMember} value={formik.values.jobTitle} />
                                                </div>
                                                <div className="col-span-full">
                                                    <Dropdown label="Department" name="department" onChange={handleFormMember} value={formik.values.department}>
                                                        {renderSelect(depart)}
                                                    </ Dropdown>
                                                </div>
                                                <div className="col-span-full">
                                                    <Input label="File" type="text" name="file" placeholder="Enter File" onChange={handleFormMember} value={formik.values.file} />
                                                </div>
                                            </div>
                                        </fieldset>
                                        <div className='py-4'>
                                            <Button title="Submit" type="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ) : ("")}
        </>
    )


}

export default Members
