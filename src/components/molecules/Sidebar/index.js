import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <aside id="sidebar" className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar">
                        <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 ">
                            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                                <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 ">
                                    <ul className="pb-2 space-y-2">
                                        <li>
                                            <a href="/" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                                <span className="ml-3">Dashboard</span>
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="/analytics" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                                <span className="ml-3">Analytics</span>
                                            </a>
                                        </li> */}
                                        {/* <li>
                                            <a href="/expenses" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                                <span className="ml-3" >Expenses</span>
                                            </a>
                                        </li> */}
                                        <li>
                                            <a href="/resources" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                                <span className="ml-3">Resources</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/projects" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                                <span className="ml-3">Projects</span>
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="/tasks" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                                <span className="ml-3" >Tasks</span>
                                            </a>
                                        </li> */}
                                        <li>
                                            <a href="/members" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                                <span className="ml-3">Members</span>
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="/invoices" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group">
                                                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                                <span className="ml-3">Invoices</span>
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div >
                    </aside >
                </div>
            </div>




        </>
    )
}

export default Sidebar
