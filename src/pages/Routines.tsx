import {RoutineType} from "../types/RoutineType";
import React, {useEffect, useState} from "react";
import userService from "../services/userService";
import '../style/Card.css'
import {useParams} from "react-router-dom";


const Routines = () => {
    const {id} = useParams();
    const [routines, setRoutines] = useState<RoutineType[]>([]);

    useEffect(() => {
        if(routines.length === 0){
            userService.getRoutinesFromUser(Number(id)).then((res:any) => {
                setRoutines(res.data.routines);
            });
        }
    });

    return (
        <div className='container'>
            <h1 className='title'>Routines of {localStorage.getItem("fullName")}</h1>
            <div className='routine-list'>
                {routines.map((routine:RoutineType) => (
                    <div key={routine.id} className='grid'>
                        <p>{routine.name}</p>
                        <p>version {routine.version}</p>
                    </div>)
                )}
            </div>
            <a href={"/routines/add"}>Create a new routine</a>
        </div>
    );
}

export default Routines;