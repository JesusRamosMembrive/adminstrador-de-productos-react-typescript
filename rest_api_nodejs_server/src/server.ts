import express from 'express';
import router from './router';
// @ts-ignore
import db from '../config/db';
import colors from 'colors';


// Conectar base de datos
async function connectDB() {
    try {
        await db.authenticate();
        await db.sync();
        // console.log(colors.blue.bold('Connection has been established successfully.'));
    } catch (error) {
        // console.error(colors.red.bold('Unable to connect to the database:'), error);
    }
}

connectDB().then(r => console.log('Conectado a la base de datos'));


const server = express();

// Leer datos de formularios
server.use(express.json());

server.use("/api/products", router);

server.get('/api', (req, res) => {
    res.json({msg: 'Mensaje desde endpoint'});
});

export default server