import validator from 'express-validator'
const { body } = validator

export default function UserRules(rule){
    switch (rule) {
        case 'create_user':
            return [
                body('nome', 'O nome de usuário é obrigatório!').exists(),
                body('nome', 'O nome de usuário deve ter entre 3 e 80 caracteres!').isLength({min: 3, max: 80}),
                body('email', 'O e-mail de usuário é obrigatório!').exists(),
                body('senha', 'A senha é obrigatória!').exists(),
                body('senha', 'A senha deve ter entre 3 e 12 caracteres!').isLength({min: 3, max: 12}),
                body('confirma_senha', 'As senhas não coincidem').custom((v, {req}) => v === req.body.senha),
                body('email', 'O e-mail é inválido!').isEmail(),
            ];
        default:
            break;
    }
}