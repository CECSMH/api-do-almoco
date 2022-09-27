import validator from 'express-validator'
const { body } = validator

export default function GrupoRules(rule) {
    switch (rule) {
        case 'create_grupo':
            return [
                body('nome', 'O nome do grupo é obrigatório!').exists(),
                body('lider_id', 'O lider do grupo é necessário!').exists(),
            ];
        default:
            break;
    }
}