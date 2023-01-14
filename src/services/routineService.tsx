import {axiosInstance} from "./axios.service";
import {RoutineType} from "../types/RoutineType";

type setsRepsType = {
    sets: number;
    reps: number;
}

const url = "/routines/";

const getAllRoutines = () => {
    return axiosInstance.get(url);
}

const addRoutine = (routine: RoutineType) => {
    return axiosInstance.post(url, routine);
}

const findRoutineById = (id : number) => {
    return axiosInstance.get(url + id);
}


const updateRoutine = (routine: RoutineType) => {
    return axiosInstance.put(url, routine);
}

const deleteRoutine = (id: number) => {
    return axiosInstance.delete(url + id);
}

const addExerciseToRoutine = (routineId: number, exerciseId: number, SetsRepsDTO: setsRepsType) => {
    return axiosInstance.post(url + routineId + "/exercises/" + exerciseId, SetsRepsDTO);
}

export default{
    getAllRoutines,
    addRoutine,
    findRoutineById,
    updateRoutine,
    deleteRoutine,
    addExerciseToRoutine
}