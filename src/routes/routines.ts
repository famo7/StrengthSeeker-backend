import express from "express"

const router = express.Router();

import { RoutineModel } from "../models/Routines.js";
import { SetModel } from "../models/Sets.js";
import { ExerciseModel } from "../models/Exercises.js";
import { workoutModel } from "../models/Workouts.js";
import auth from "../middleware/auth";
import { AuthenticatedRequest } from "../types/applicationTypes.js";

router.get("/", auth, async (req: AuthenticatedRequest, res) => {
    console.log(req.user.email);

    const routines = await RoutineModel.find({ user: req.user.id }).populate({
        path: 'workouts',
        model: workoutModel,
        populate: {
            path: 'exercises',
            model: ExerciseModel,
            populate: {
                path: 'sets',
                model: SetModel
            }
        }
    });

    res.json(routines);
});


router.get("/active", auth, async (req: AuthenticatedRequest, res) => {
    const routines = await RoutineModel.findOne({ user: req.user.id, active: true }).populate({
        path: 'workouts',
        model: workoutModel,
        populate: {
            path: 'exercises',
            model: ExerciseModel,
            populate: {
                path: 'sets',
                model: SetModel
            }
        }
    }).select("workouts");

    res.json(routines);
});

export const routineRoute = router;


