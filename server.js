import express from 'express';
import 'dotenv/config'
import { dbConnect } from './config/db.js';
import { satelliteRouter } from './router/satellite.router.js';
import bodyParser from 'body-parser';
import { userRouter } from './router/user.router.js';

const app =express();

const port=process.env.PORT;
let jsonParser= bodyParser.json();
app.use(jsonParser);
app.use("/satellite",satelliteRouter);
app.use("/user",userRouter)
app.get("/",(req,res)=>
{
    res.send(`check satellite on port ${port}/satellite/getsatellite`);
})

app.listen(port,()=>
{
    console.log(`server run on port ${port}`)
})
dbConnect();