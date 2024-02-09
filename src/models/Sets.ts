import { Schema, model } from 'mongoose';


const setSchema = new Schema({
    reps: { type: Number },
    weight: { type: Number },
});

setSchema.set("toJSON", {
    transform: (_document: any, returnedObject: any) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

export const SetModel = model('set', setSchema);
