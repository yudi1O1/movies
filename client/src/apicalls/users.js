import axios from "axios";
const { axiosInstance } = require(".");
const host = "https://movies-f1w9.onrender.com"




// Regsiter a new User

export const RegisterUser = async (payload)=>{
   try {
        const response = await axiosInstance.post(`${host}/api/users/register` , payload)
        return response.data
   } catch (error) {
      return error
   }
}


export const LoginUser = async (payload)=>{
   try {
      const response = await axios.post(`${host}/api/users/login` , payload)
      return response.data
 } catch (error) {
    return error
 }
}

//get Current User
export const GetCurrentUser = async () => {
   try {
       const response = await axiosInstance.get(`${host}/api/users/get-current-user`);
       return response.data;
   } catch (error) {
       return error;
   }
}


