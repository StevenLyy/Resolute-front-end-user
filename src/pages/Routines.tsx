import {RoutineType} from "../types/RoutineType";
import {useEffect, useState} from "react";
import userService from "../services/userService";
import '../style/Card.css'
import {useParams} from "react-router-dom";


const Routines = () => {
    const {id} = useParams();
    const [username, setUsername] = useState("");
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
            <p className='title'>Routines of {username}</p>
            <div className='routine-list'>
                {routines.map((routine:RoutineType) => (
                    <div key={routine.id} className='grid'>
                        <h2>{routine.name}</h2>
                        <h2>version {routine.version}</h2>
                    </div>)
                )}
            </div>

            <button onClick={() => {window.history.back()}}>Back</button>
        </div>
    );
}

export default Routines;