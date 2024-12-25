import {Request, Response} from 'express';
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
    try {
        // Crear el producto
        const product = await Product.findAll({
            order:[
                ['price', 'ASC']
            ]
        });
        return res.json({data: product});
    } catch (error) {
        console.log(error); // <- Importante si quieres manejar errores con middleware de error
    }
}


export const getProductsById = async (req: Request, res: Response) => {
    try {
        // Crear el producto
        const product = await Product.findAll({
            order:[
                ['price', 'ASC']
            ]
        });
        return res.json({data: product});
    } catch (error) {
        console.log(error); // <- Importante si quieres manejar errores con middleware de error
    }
}


export const createProduct: (req: Request, res: Response) => any = async (req: Request, res: Response) => {
    try {
        // Crear el producto
        const product = await Product.create(req.body);
        return res.json({data: product});
    } catch (error) {
        console.log(error); // <- Importante si quieres manejar errores con middleware de error
    }
};
