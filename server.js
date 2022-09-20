import express from 'express';
import mongoose from "mongoose";
const app = express();
import { DATABASE_URI } from "./config"
import routes from './routes';
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use('/', routes);
app.use(express.urlencoded({extended:true}))

mongoose.connect(DATABASE_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(7000, () => console.log('listen on port 7000.'))).catch((error) => console.log("error occured", error))

app.get('/',(req,res) => res.send("hello world!"));