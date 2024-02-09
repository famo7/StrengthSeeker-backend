import express from "express"

const router = express.Router();

import { RoutineModel } from "../models/Routines.js";
import { SetModel } from "../models/Sets.js";
import { ExerciseModel } from "../models/Exercises.js";
import { workoutModel } from "../models/Workouts.js";





export const workoutRoute = router;
