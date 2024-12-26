import express from 'express';
import router from "./router";
import db from "./config/db";

const server = express();

export const dbConnect = async () => {
    try {
        await db.authenticate();
        db.sync(); // Agrego force para rehacer la sincronización por si la tabla tiene cambios.
        //  Console.log(colors.magenta.bold('Successful DATABASE connection'));
    } catch (error) {
        console.error(error);
    }
};

dbConnect().then();

server.use(express.json());
server.use('/api/products', router);

server.get('/api', (req, res) => {
    res.json({ msg: 'Mensaje desde endpoint' });
});

export default server;