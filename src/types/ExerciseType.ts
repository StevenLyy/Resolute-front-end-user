import {MuscleGroupType} from "./MuscleGroupType";

export type ExerciseType = {
    id?: number;
    name: string;
    details: string;
    musclegroups : MuscleGroupType[];
    sets?: number;
    reps?: number;
}