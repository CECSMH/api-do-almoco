import validator from 'express-validator'
const { body, param } = validator

export default function GrupoRules(rule) {
    switch (rule) {
        case 'create_grupo':
            return [
                body('nome', 'O nome do grupo é obrigatório!').exists(),
                body('nome', 'O nome deve ter entre 3 e 80 caracteres!').isLength({ min: 3, max: 80 })
            ];
        case 'add_member':
            return [
                body('user_id', 'O id do usuário é obrigatório!').exists(),
                body('user_id', 'O id deve ser inteiro!').isInt()
            ];
        case 'get_members':
            return [
                param('id', 'O id do grupo é obrigatório!').exists(),
                param('id', 'O id do grupo deve ser inteiro!').isInt(),
            ];
        case 'request_enter':
            return [
                body('grupo_id', 'O id do grupo é obrigatório!').exists(),
                body('grupo_id', 'O id do grupo deve ser inteiro!').isInt(),
            ];
        default:
            break;
    };
};