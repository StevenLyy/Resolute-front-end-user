import React, {useState, useEffect} from "react";
import '../Style/Card.css'
import exerciseService from "../services/exerciseService";
import {ExerciseType} from "../types/ExerciseType";
import {MuscleGroupType} from "../types/MuscleGroupType";


 export const ExerciseList = () => {
     const [exercises, setExercises] = useState<ExerciseType[]>([]);

     useEffect(() => {
            if(exercises.length === 0) {
                exerciseService.getExercises().then((res: any) => {
                    setExercises(res.data);
            });
         }
     });

     return(
         <div className='grid'>{
         exercises.map((ex:ExerciseType) => (
                <div key={ex.id} className='item'>
                    <h2>{ ex.name }</h2>
                    <h4>{ ex.details }</h4>
                     <span>
                         {ex.musclegroups.map((muscle:MuscleGroupType) => <div key={muscle.id}>{muscle.name}</div>)}
                    </span>
                </div>))
         }</div>
     )
 }

 export default ExerciseList;