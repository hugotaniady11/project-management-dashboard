import React from 'react'
import { Graph, Donut } from '../../components/molecules'
import { getAllMembers, getAllProjects, getAllResources } from '../../utils/data'
import { useState, useEffect } from 'react'

const Home = () => {
  const [members, setMembers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [resources, setResources] = useState([]);
  const [totalSumMember, setTotalSumMember] = useState(0);
  const [totalSumProject, setTotalSumProject] = useState(0);
  const [totalSumResource, setTotalSumResource] = useState(0);

  useEffect(() => {
    getAllMembers().then((members) => {
      setMembers(members)
    })
    getAllProjects().then((projects) => {
      setProjects(projects)
    })
    getAllResources().then((resources) => {
      setResources(resources.resources)
    })
}, [])

  useEffect(() => {
    const total = members.length;
    setTotalSumMember(total);
    const total2 = projects.length;
    setTotalSumProject(total2);
    const total3 = resources.length;
    setTotalSumResource(total3);
  }, [members, projects, resources]);


  return (

    <section className="bg-white">
      <div className="container px-8 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">Kewocorp <span className="underline decoration-blue-500">Admin Dashboard</span></h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
            <span className="inline-block text-blue-500 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize">Member</h1>
            <p className="text-xl">{totalSumMember}</p>
          </div>

          <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
            <span className="inline-block text-blue-500 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize ">Projects</h1>
            <p className="text-xl">{totalSumProject}</p>
          </div>

          <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
            <span className="inline-block text-blue-500 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize ">Resources</h1>
            <p className="text-xl">{totalSumResource}</p>

          </div>
        </div>
      </div>

      <div className='container px-8 mx-auto'>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-6 md:grid-cols-2 xl:grid-cols-2">
          <div clasclassNames="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
            <Graph />
          </div>
          <div className="p-8 space-y-3 border-2 border-blue-400  rounded-xl">
            <Donut />
          </div>
        </div>
      </div>
    </section>

  )
}

export default Home
