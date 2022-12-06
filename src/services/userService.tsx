import {axiosInstance} from "./axios.service";

const url = "users/";

const getRoutinesFromUser = (userId : number) => {
    return axiosInstance.get(url + userId);
}

export default{
    getRoutinesFromUser,
}