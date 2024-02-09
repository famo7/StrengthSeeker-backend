import express from "express"
const router = express.Router();

import { UserModel } from "../models/User.js";
import bcrypt from "bcrypt";

router.get('/', async (req, res) => {
    const users = await UserModel.find({});
    res.json(users);
});

router.post('/', async (req, res) => {
    const body = req.body;
    const findOneEmail = await UserModel.findOne({ email: req.body.email });

    if (findOneEmail) {
        return res.status(500).json({
            message: 'This email is already used try with another email',
        });
    }
    const passwordHash = await bcrypt.hash(body.password, 10);

    const user = new UserModel({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: passwordHash,
    });

    const savedUser = await user.save();
    res.json(savedUser);
});

export const userRoute = router;
