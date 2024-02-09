import "dotenv/config"
import "express-async-errors";
import cors = require("cors");

import "./db/connect";
import { routineRoute } from "./routes/routines.js";
import { loginRoute } from "./routes/login";
import { workoutRoute } from "./routes/workouts";
import { userRoute } from "./routes/users";
import express, { Express } from 'express';

const app: Express = express();

app.use(express.json());
app.use((cors as (options: cors.CorsOptions) => express.RequestHandler)({}));

app.use("/api/routines", routineRoute);
app.use("/api/workouts", workoutRoute);
app.use("/api/login", loginRoute);
app.use("/api/users", userRoute);
app.listen(3000, () => console.log('server started'));