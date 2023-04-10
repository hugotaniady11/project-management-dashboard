import axios from "axios";
import jwtDecode from 'jwt-decode';

const baseUrl = process.env.REACT_APP_KEWO_API;

export const httpClient = axios.create({
    baseURL: baseUrl
  });

export const logout = () => {
    localStorage.removeItem("user")
}

export const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    if (user){
        const decodedToken = jwtDecode(user);
        const expirationDate = decodedToken.exp;
         var current_time = Date.now() / 1000;
         if(expirationDate < current_time)
         {
             localStorage.removeItem("user");
         }
         const userData = decodedToken;
         return userData
      }
 
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

export const getAllResources = async() => {
    const response = await axios.get(`${baseUrl}api/resources/`);
  
    return response.data;
}

export const getResourceById = async(id) => {
    const resource = await axios.get(`${baseUrl}api/resources/${id}`)
    return resource

}

export const deleteResource = async(id) => {
    const resource = await axios.delete(`${baseUrl}api/resources/${id}`)
    return resource
}

export const updateResource = async(id, payload) => {
    const resource = await axios.put(`${baseUrl}api/members/${id}`, payload, {
        headers: {
          'Content-Type': 'application/json'
        }})
    return resource.data
}