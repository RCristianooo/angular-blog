import { remultExpress } from "remult/remult-express";
import { Task } from '../shared/task'
import { tasksController } from "../shared/tasksController";
// import { createPostgresDataProvider } from "remult/postgres"

export const api = remultExpress({
    entities:[Task],
    controllers: [tasksController],
    getUser: req => req.session!["user"],
    // dataProvider: createPostgresDataProvider({
    //     connectionString: "postgres://postgres:MASTERKEY@localhost/postgres"
    // }),
});