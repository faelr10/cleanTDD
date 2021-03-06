import express, { NextFunction, Response, Request } from "express";
import "express-async-errors";
import { routes } from "./routes/routes";

const app = express();

app.use(express.json());
app.use(routes);

export { app };
