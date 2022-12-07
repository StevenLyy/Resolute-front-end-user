import {useState, MouseEvent, useEffect} from "react";
import routineService from "../services/routineService";
import {RoutineType} from "../types/RoutineType";
import {useNavigate} from "react-router-dom";
import {ExerciseType} from "../types/ExerciseType";
import exerciseService from "../services/exerciseService";
import "../style/Card.css"


const AddRoutine = () => {
    const navigate = useNavigate();

    const [routineName, setRoutineName] = useState("");
    const [routineVersion, setRoutineVersion] = useState(1);
    // exercises are the exercises that are fetched from the database
    const [exercises, setExercises] = useState<ExerciseType[]>([]);
    // selectedExercises are the exercises that are selected by the user
    const [selectedExercises, setSelectedExercises] = useState<ExerciseType[]>([]);

    useEffect(() => {
        exerciseService.getExercises().then((res) => {
            setExercises(res.data);
        });
    }, []);


    const saveRoutine = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const newRoutine : RoutineType = {name: routineName, version: routineVersion};
        routineService.addRoutine(newRoutine).then((routine) => {
            for(let i = 0; i < selectedExercises.length; i++){
                routineService.addExerciseToRoutine(routine.data.id, Number(selectedExercises[i].id), {sets: 3, reps: 10});
            }
            console.log("Routine added");
        });
    }

    function addSelectedExercise(exercise: ExerciseType) {
        if(selectedExercises.includes(exercise)){
            setSelectedExercises(selectedExercises.filter((e) => e !== exercise));
            return;
        }
        setSelectedExercises([...selectedExercises, exercise]);
    }
    const renderExercise = () => {
        const determineSelected = (s: ExerciseType) => {
            const isIncluded = selectedExercises.includes(s);
            switch(isIncluded){
                case true:
                    return "cardClickable selected";
            }
            return "cardClickable unselected";
        }

        return(
        exercises.map((exercise:ExerciseType) => (
            <div key={exercise.id} onClick={() => addSelectedExercise(exercise)}
                 className={determineSelected(exercise)}>
                <label className="cardName">{exercise.name}</label>
                <br/>
                <label className="cardDetails">{exercise.details}</label>
            </div>
        )))
    }

    return (
        <div className='container'>
            <p className='title'>Add a Routine</p>
            <form>
                <div>
                    <label htmlFor="routineInput">Routine name:</label>
                    <input id="routineInput" type="text" value={routineName}
                           onChange={(e) => {setRoutineName(e.target.value)}} required/>
                </div>
                <div className="cardContainer">{renderExercise()}</div>
                    <button disabled={ !routineName }
                        type={"submit"} onClick={saveRoutine}>Save routine</button>
            </form>

            <button onClick={() => console.log(selectedExercises)}>Test selected in console</button>
        </div>
    );
}

export default AddRoutine;