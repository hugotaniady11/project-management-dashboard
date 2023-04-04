import axios from "axios";

const baseUrl = process.env.REACT_APP_KEWO_API;

export const httpClient = axios.create({
    baseURL: baseUrl
  });

export const logout = () => {
    localStorage.removeItem("user")
}

export const getCurrentUser = () => {
    const user = JSON.parse(JSON.stringify(localStorage.getItem("user")));
  return user;
}

export const getAllProjects = async() => {
    const projects = await axios.get(`${baseUrl}api/projects`)
    return projects.data
}

export const getProjectById = async(project_id) => {
    const project = await axios.get(`${baseUrl}api/projects/${project_id}`)
    return project
}

export const getAllMembers = async() => {
    const members = await axios.get(`${baseUrl}api/members`)
    return members.data
}

export const getMemberById = async(member_id) => {
    const member = await axios.get(`${baseUrl}api/members/${member_id}`)
    return member

}

export const deleteMember = async(member_id) => {
    const member = await axios.delete(`${baseUrl}api/members/${member_id}`)
    return member
}

export const updateMember = async(member_id, payload) => {
    const member = await axios.put(`${baseUrl}api/members/${member_id}`, payload, {
        headers: {
          'Content-Type': 'application/json'
        }})
    return member.data
}

export const getDepartments = async() => {
    const departments = await axios.get(`${baseUrl}api/department`)
    return departments.data
}