import { axiosInstance } from ".";
const host = "https://movies-f1w9.onrender.com"

export const AddTheatre = async (payload) => {
    try {
      const response = await axiosInstance.post(
        `${host}/api/theatres/add-theatre`,
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };


  export const UpdateTheatre = async (payload) => {
    try {
      const response = await axiosInstance.post(
        `${host}/api/theatres/update-theatre`,
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  export const DeleteTheatre = async (payload) => {
    try {
      const response = await axiosInstance.post(
        `${host}/api/theatres/delete-theatre`,
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

 //get all theatres
  export const GetAllTheatres = async () => {
    try {
      const response = await axiosInstance.get(`${host}/api/theatres/get-all-theatres`);
      return response.data;
    } catch (error) {
      return error.response;
    }
  };






  // get all theatres by owner
  export const GetAllTheatresByOwner = async (payload) => {
    try {
      const response = await axiosInstance.post(
        `${host}/api/theatres/get-all-theatres-by-owner`,
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };


  //add a show

  export const AddShow = async (payload) => {
    try {
      const response = await axiosInstance.post(
        `${host}/api/theatres/add-show`,
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

 // get shows by theatre
  export const GetAllShowsByTheatre = async (payload) => {
    try {
      const response = await axiosInstance.post(
        `${host}/api/theatres/get-all-shows-by-theatre`,
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };


  // delete movies

  export const DeleteShow = async (payload) => {
    try {
      const response = await axiosInstance.post(
        `${host}/api/theatres/delete-show`,
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  // get all theatres for a movie
export const GetAllTheatresByMovie = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${host}/api/theatres/get-all-theatres-by-movie`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};


// 
// get show by id
export const GetShowById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${host}/api/theatres/get-show-by-id`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}













