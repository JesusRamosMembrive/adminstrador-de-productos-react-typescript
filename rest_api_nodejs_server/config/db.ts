import {Sequelize} from "sequelize";

const db = new Sequelize('postgresql://rest_api_node_typescript_1310_user:' +
    'uEylbpecjlqBy2rWjzA0CuBKXTDzdAbY@dpg-ctkkunbqf0us739j8npg-a.' +
    'frankfurt-postgres.render.com/rest_api_node_typescript_1310',
    {
        dialectOptions: {
            ssl: {
                require: false,
            }
        }
    });

export default db;