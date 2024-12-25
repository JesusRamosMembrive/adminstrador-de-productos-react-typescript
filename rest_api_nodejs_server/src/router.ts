import { Router } from 'express';
import {
    createProduct,
    deleteProduct,
    getProducts,
    getProductsById,
    updateAvailability,
    updateProduct
} from "./handlers/product";
import { body, param } from "express-validator";
import {handleInputsErrors} from "./middleware";

const router = Router();

router.get('/', getProducts);
router.get('/:id',
    param('id').isInt().withMessage("Id no valido"),
    handleInputsErrors,
    getProductsById);

router.post('/',
    // Validación
    body('name').notEmpty().withMessage("El nombre no puede ir vacío"),
    body('price')
        .isNumeric().withMessage("Valor no valido")
        .notEmpty().withMessage("El precio no puede ir vacío")
        .custom(value => value > 0).withMessage("El precio no puede ser negativo"),
    handleInputsErrors,
    createProduct);

router.patch('/',
    param('id').isInt().withMessage("Id no valido"),
    handleInputsErrors,
    updateAvailability);

router.put('/:id',
    body('name').notEmpty().withMessage("El nombre no puede ir vacío"),
    body('price')
        .isNumeric().withMessage("Valor no valido")
        .notEmpty().withMessage("El precio no puede ir vacío")
        .custom(value => value > 0).withMessage("El precio no puede ser negativo"),
    body('availability').isBoolean().withMessage("Valor no valido"),
    handleInputsErrors,
    updateProduct
);

router.delete('/',
    param('id').isInt().withMessage("Id no valido"),
    handleInputsErrors,
    deleteProduct
);

export default router;
