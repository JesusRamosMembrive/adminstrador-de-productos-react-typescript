import {Request, Response} from 'express';
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
    try {
        // Obtener todos los productos
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
        // obtener el producto por id
        const {id} = req.params
        const product = await Product.findByPk(id);
        if(!product)
        {
            return res.status(404).json({error: 'Producto no encontrado'});
        }
        return res.json({data:product})
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


export const updateProduct: (req: Request, res: Response) => any = async (req: Request, res: Response) => {
    try {
        // Modificar el producto
        const {id} = req.params
        const product = await Product.findByPk(id);
        if(!product)
        {
            return res.status(404).json({error: 'Producto no encontrado'});
        }

        await product.update(req.body);
        await product.save();


    } catch (error) {
        console.log(error); // <- Importante si quieres manejar errores con middleware de error
    }
};

export const updateAvailability: (req: Request, res: Response) => any = async (req: Request, res: Response) => {
    try {
        // Modificar el producto
        const {id} = req.params
        const product = await Product.findByPk(id);
        if(!product)
        {
            return res.status(404).json({error: 'Producto no encontrado'});
        }

        product.availability = req.body.availability
        await product.save();


    } catch (error) {
        console.log(error); // <- Importante si quieres manejar errores con middleware de error
    }
};

export const deleteProduct: (req: Request, res: Response) => any = async (req: Request, res: Response) => {
    try {
        // Modificar el producto
        const {id} = req.params
        const product = await Product.findByPk(id);
        if(!product)
        {
            return res.status(404).json({error: 'Producto no encontrado'});
        }

        await product.save();
        res.json({data: 'Producto eliminado'});

    } catch (error) {
        console.log(error); // <- Importante si quieres manejar errores con middleware de error
    }
};
