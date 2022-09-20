import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { APP_URL } from "../config";


const todoSchema = new Schema({
    name: { type: String, required: true },
    status: { type: Boolean, default: false },

}, { timestamps:true });

export default mongoose.model('Todo', todoSchema, 'todos');  