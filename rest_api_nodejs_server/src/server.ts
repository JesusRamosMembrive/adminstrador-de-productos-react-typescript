import express from 'express';
import router from './router';
import db from '../config/db';

// Conectar base de datos

async function connectDB() {
    try {
        await db.authenticate();
        await db.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDB();


const server = express();

server.use("/", router);


export default server