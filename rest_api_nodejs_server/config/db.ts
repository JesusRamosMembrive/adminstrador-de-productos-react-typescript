import {Sequelize} from "sequelize-typescript";
import Product from "../src/models/Product.model";
import dotenv from "dotenv"
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL!,
    {
        dialectOptions: {
            ssl: {
                require: false,
            }
        },
        models: [__dirname + '../src/models/**/*.model.ts'],
    });

db.addModels([Product]);


export default db;
