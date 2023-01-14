import React, {useEffect} from "react";
import exerciseService from "../services/exerciseService";

const Exercises = () => {
    useEffect(() => {
        exerciseService.getExercises().then((response) => {
            console.log(response);
        });
    });


    return(
        <div>

        </div>
    )
}

export default Exercises;