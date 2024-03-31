import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSOWRD = process.env.DB_PASSWORD;

export const Connection = () =>{
    const MONGOOSE_URL = `mongodb+srv://${USERNAME}:${PASSOWRD}@mydatabase.bo1qale.mongodb.net/?retryWrites=true&w=majority&appName=myDatabase`
    mongoose.connect(MONGOOSE_URL, {useNewUrlParser: true});
    mongoose.connection.on('connected', () => {
        console.log('databse connect successfully...');
    })
    mongoose.connection.on('disconnected', () => {
        console.log('databse disconnected...');
    })
    mongoose.connection.on('error', () => {
        console.log('databse error...');
    })
}