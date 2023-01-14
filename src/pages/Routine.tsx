import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import routineService from "../services/routineService";
import {RoutineType} from "../types/RoutineType";
import {ExerciseType} from "../types/ExerciseType";
import "../style/Card2.css";

const Routine = () => {
    const {id} = useParams();
    const [routine, setRoutine] = useState<RoutineType>();
    const [exercises, setExercises] = useState<ExerciseType[]>([]);
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        routineService.findRoutineById(Number(id)).then((res: any) => {
            setRoutine(res.data);
            for (let i = 0; i < (res.data.routineExercises).length; i++) {
                setExercises(exercises => [...exercises, res.data.routineExercises[i].exercise]);
            }
        });
    }, []);

    return (
        <>
            <h1>{routine?.name}</h1>
            <div className="card2container">
                {
                    exercises.map((exercise: ExerciseType, index) => (
                        <div key={index} className="card2">
                            <h2 className="card2title">{exercise.name}</h2>
                            <p className="card2subtext">{exercise.details}</p>
                        </div>)
                    )
                }
            </div>
            <button onClick={goBack}>Go Back</button>
        </>
    );
}

export default Routine;