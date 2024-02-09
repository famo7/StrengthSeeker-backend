import bcrypt from "bcrypt";
import express from "express";
const loginRouter = express.Router();
import { UserModel as User } from "../models/User";
import jwt from 'jsonwebtoken';

loginRouter.post('/', async (request, response) => {
    const body = request.body;

    const user = await User.findOne({ email: body.email });
    const passwordCorrect =
        user === null ? false : await bcrypt.compare(body.password, user.password);

    if (!(user && passwordCorrect)) {
        return response.status(401).json({
            error: 'invalid username or password',
        });
    }

    const userForToken = {
        email: user.email,
        id: user._id,
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

    response.status(200).send({
        token,
        email: user.email,
        firstName: user.firstName,
    });
});

export const loginRoute = loginRouter;
