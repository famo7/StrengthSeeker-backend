import { Schema, model, Types } from "mongoose";

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    routines: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Routine',
        },
    ],
});

userSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});
export const UserModel = model('user', userSchema);
