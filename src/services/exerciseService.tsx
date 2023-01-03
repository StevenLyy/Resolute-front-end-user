import {axiosInstance} from "./axios.service";

const url = "/exercises/";
const getExercises = () => {

    return axiosInstance.get(url);
}

export default{
    getExercises
}