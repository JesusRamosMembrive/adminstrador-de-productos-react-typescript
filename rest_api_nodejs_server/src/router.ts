import { Router } from 'express';
import {createProduct, getProducts, getProductsById} from "../src/handlers/product";
import { body } from "express-validator";
import {handleInputsErrors} from "./middleware";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductsById);


router.post('/',

    // Validación
    body('name').notEmpty().withMessage("El nombre no puede ir vacío"),
    body('price')
        .isNumeric().withMessage("Valor no valido")
        .notEmpty().withMessage("El precio no puede ir vacío")
        .custom(value => value > 0).withMessage("El precio no puede ser negativo"),
    handleInputsErrors,
    createProduct);

router.patch('/', (req, res) => {
    res.json('Hello World desde PATCH');
});

router.put('/', (req, res) => {
    res.json('Hello World desde PUT');
});

router.delete('/', (req, res) => {
    res.json('Hello World desde DELETE');
});

export default router;
