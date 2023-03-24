import axios from "axios";

const baseUrl = process.env.REACT_APP_KEWO_API;

export const getAllMembers = async() => {
    const members = await axios.get(`${baseUrl}api/members`)
    return members.data
}

export const getAllProjects = async() => {
    const projects = await axios.get(`${baseUrl}api/projects`)
    return projects.data
}

export const getProjectById = async(project_id) => {
    const project = await axios.get(`${baseUrl}api/projects/${project_id}`)
    return project
}

export const getMemberById = async(member_id) => {
    const member = await axios.get(`${baseUrl}api/members/${member_id}`)
    return member
}