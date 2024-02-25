import axios from "axios";

export const userApi = axios.create({
    baseURL : "http://localhost:8080/api/user"
})

export const roleApi = axios.create({
    baseURL : "http://localhost/api/role"
})

export const getAllUsers = () => {
    return userApi.get("/users");
}

export const createUser = (userCommand) => {
    return userApi.post("/create" , userCommand);
}

export const deleteUser = (id) => {
    return userApi.delete(`/delete/${id}`)
}

export const updateUser = (userCommand) => {
    return userApi.post("/update" , userCommand);
}

export const addRoleToUSer = (roleCommand , id) => {
    return roleApi.post(`/addRole/${id}`, roleCommand);
}

export const removeRoleToUSer = (roleCommand , id) => {
    return roleApi.post(`/removeRole/${id}`, roleCommand);
}