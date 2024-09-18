const { axiosInstance } = require(".");
const host = "https://movies-f1w9.onrender.com"

// Add a new movie
export const AddMovie = async (payload) => {
    try {
        const response = await axiosInstance.post(`${host}/api/movies/add-movie`, payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}

// get all movies
export const GetAllMovies = async () => {
    try {
        const response = await axiosInstance.get(`${host}/api/movies/get-all-movies`);
        return response.data;
    } catch (error) {
        return error.response;
    }
}

// edit a Movie
export const UpdateMovie = async (payload) => {
    try {
        const response = await axiosInstance.post(`${host}/api/movies/update-movie`, payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}


//delete a movie
export const DeleteMovie = async (payload) => {
    try {
        const response = await axiosInstance.post(`${host}/api/movies/delete-movie`, payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}

// get a movie by id
export const GetMovieById = async (id) => {
    try {
        const response = await axiosInstance.get(`${host}/api/movies/get-movie-by-id/${id}`);
        return response.data;
    } catch (error) {
        return error.response;
    }
}








