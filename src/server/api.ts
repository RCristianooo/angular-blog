import { remultExpress } from "remult/remult-express";
import { Task } from '../shared/task'
import { tasksController } from "../shared/tasksController";

export const api = remultExpress({
    entities:[Task],
    controllers: [tasksController],
});