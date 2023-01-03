import {axiosInstanceLogin} from "./axios.service";

const url = "/auth/";

const login = (username: string, password: string) => {
    return axiosInstanceLogin.post(url + "login", {username: username, password: password});
}

export default {
    login
}