import {axiosInstance} from "./axios.service";

const url = "users/";

const getRoutinesFromUser = (userId : number) => {
    return axiosInstance.get(url + userId);
}

const addRoutineToUser = (userId : number, routineId : number) => {
    return axiosInstance.post(url + userId + "/routines/"+routineId);
}

export default{
    getRoutinesFromUser,
    addRoutineToUser
}