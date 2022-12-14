
import validator from 'express-validator';
const { validationResult } = validator;

export default function Checker(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({ status: 'invalid field', msgs: errors.array() });
    
    else next();
};