import validator from 'express-validator'
const { body } = validator

export default function GrupoRules(rule) {
    switch (rule) {
        case 'create_grupo':
            return [
                body('nome', 'O nome do grupo é obrigatório!').exists(),
                body('nome', 'O nome deve ter entre 3 e 80 caracteres!').isLength({min: 3, max: 80}),
            ];
        default:
            break;
    };
};