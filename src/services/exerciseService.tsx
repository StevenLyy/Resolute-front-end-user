import {axiosInstance} from "./axios.service";

const url = "/exercises/";
const getExercises = () => {
    return axiosInstance.get(url);
}

const findExerciseById = (id: number) => {
    return axiosInstance.get(url + id);
}

export default{
    getExercises,
    findExerciseById
}