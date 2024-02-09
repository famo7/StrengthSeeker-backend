import { Schema, model, Types } from "mongoose";
import { ExerciseModel } from "./Exercises.js";

const workoutSchema = new Schema({
    name: { type: String },
    start_time: { type: Date },
    end_time: { type: Date },
    exercises: [
        {
            type: Types.ObjectId,
            ref: ExerciseModel
        },
    ],
});

workoutSchema.set("toJSON", {
    transform: (_document: any, returnedObject: any) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

export const workoutModel = model('workout', workoutSchema);