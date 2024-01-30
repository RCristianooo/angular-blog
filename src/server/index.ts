import express from 'express';
import { api } from './api'
import session from "cookie-session";
import { auth } from "./auth"

const app = express(); //test
app.use(
    session({
        secret: process.env["SESSION_SECRET"] || "my secret"
    })
)
app.use(auth)
app.use(api)
app.get('/api/hi', (req, res) => res.send('Howdy'));
app.listen(3002, () => console.log("Started :D"));