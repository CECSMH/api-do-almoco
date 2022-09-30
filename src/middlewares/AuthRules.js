import validator from 'express-validator'
const { body } = validator

export default function AuthRules(){
    return [
        body('email', 'O e-mail é requerido!').exists(),
        body('email', 'O e-mail é invalido!').isEmail(),
        body('senha', 'A senha é requerida!').exists()
    ];
};