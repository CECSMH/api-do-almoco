import validator from 'express-validator'
const { body } = validator

export default function UserRules(rule){
    switch (rule) {
        case 'create_user':
            return [
                body('nome', 'Nome de usuário é obrigatório!').exists(),
                body('email', 'Email de usuário é obrigatório!').exists()
            ];
        default:
            break;
    }
}