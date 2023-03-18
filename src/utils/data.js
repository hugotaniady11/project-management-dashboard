import axios from "axios";

const baseUrl = process.env.REACT_APP_KEWO_API;

export const getAllMembers = async() => {
    const members = await axios.get(`${baseUrl}api/members`)
    return members.data
}

export const getMemberById = async(id) => {
    const members = await axios.get(`${baseUrl}api/members/${id}`)
    return members
}