import { Schema, model, Types } from "mongoose";
import { workoutModel } from "./Workouts.js";

const routineSchema = new Schema({
    active: { type: Boolean },
    name: { type: String },
    workouts: [
        {
            type: Types.ObjectId,
            ref: workoutModel
        },
    ],
    user: {
        type: Types.ObjectId,
        ref: 'user',
    }
});

routineSchema.set("toJSON", {
    transform: (_document: any, returnedObject: any) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

export const RoutineModel = model('Routine', routineSchema);

