import {RoutineType} from "../types/RoutineType";
import React, {useEffect, useState} from "react";
import userService from "../services/userService";
import {useParams, Link} from "react-router-dom";
import "../style/Routines.css";


const Users = () => {
    const {id} = useParams();
    const [routines, setRoutines] = useState<RoutineType[]>([]);

    useEffect(() => {
        userService.getRoutinesFromUser(Number(id)).then((res: any) => {
            setRoutines(res.data.routines);
        });
    },[]);
    if (id === localStorage.getItem('id')) {
        return (
            <div className='container'>
                <h1 className='title'>Routines of {localStorage.getItem("fullName")}</h1>
                <div className='routine-list'>
                    {routines.map((routine: RoutineType) => (
                        <div key={routine.id} className='grid'>
                            <Link className="link" to={"/routines/"+routine.id}>{routine.name}</Link>
                        </div>)
                    )}
                </div>
                <br/>
                <a className="link" href={"/routines/add"}>Create a new routine</a>
            </div>
        );
    }else{
        return(
            <h2 className='title'>This is not your profile</h2>
        )
    }
}

export default Users;