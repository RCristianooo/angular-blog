import express from 'express'
import { api } from './api'

const app = express(); //test
app.use(api)
app.get('/api/hi', (req, res) => res.send('Howdy'));
app.listen(3002, () => console.log("Started :D"));