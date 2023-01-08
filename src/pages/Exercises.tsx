import React, {useState, useEffect} from "react";
import exerciseService from "../services/exerciseService";
import {ExerciseType} from "../types/ExerciseType";

const Exercises = () => {
    const [exercises, setExercises] = useState<ExerciseType[]>([]);
    useEffect(() => {
        exerciseService.getExercises().then((res) => {
            setExercises(res.data);
        });
    }, []);

    return (
        <div>
            {exercises.map((exercise: ExerciseType) =>
                <div key={exercise.id}>
                    <h3>{exercise.name}</h3>
                    <p>{exercise.details}</p>
                </div>
            )}
        </div>
    );
}

export default Exercises;