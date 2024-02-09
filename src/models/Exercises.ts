import { Schema, model, Types } from "mongoose";


const exerciseSchema = new Schema({
    name: { type: String },
    sets: [
        {
            type: Types.ObjectId,
            ref: 'set'
        },
    ],
});

exerciseSchema.set("toJSON", {
    transform: (_document: any, returnedObject: any) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

export const ExerciseModel = model('exercise', exerciseSchema);