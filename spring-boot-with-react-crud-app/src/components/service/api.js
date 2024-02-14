// api.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${BASE_URL}/users/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async (user) => {
  try {
    return axios.post(`${BASE_URL}/users`, user);
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, user) => {
  try {
    return await axios.put(`${BASE_URL}/users/${id}`, user);
  } catch (error) {
    console.log(error);
  }
};
