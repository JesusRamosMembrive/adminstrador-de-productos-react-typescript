import { Request, Response, NextFunction } from 'express';
import {validationResult} from 'express-validator';

export const handleInputsErrors = (req: Request, res: Response, next: NextFunction) => {

    let errors = validationResult(req);

    // Si hay errores, devolvemos 400
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    next();
}