const { axiosInstance } = require(".");
const host = "https://movies-f1w9.onrender.com"

// Add a new movie
export const AddUpcomingMovie = async (payload) => {
    try {
        const response = await axiosInstance.post(`${host}/api/upcoming/add-upcoming-movie`, payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}
// get all movies
export const GetAllUpcomingMovies = async () => {
    try {
        const response = await axiosInstance.get(`${host}/api/upcoming/get-all-upcoming-movies`);
        return response.data;
    } catch (error) {
        return error.response;
    }
}




// update a movie
export const UpdateUpcomingMovie = async (payload) => {
    try {
        const response = await axiosInstance.post(`${host}/api/upcoming/update-upcoming-movie`, payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}

//delete a movie
export const DeleteUpcomingMovie = async (payload) => {
    try {
        const response = await axiosInstance.post(`${host}/api/upcoming/delete-upcoming-movie`, payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}