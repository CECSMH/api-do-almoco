import validator from 'express-validator'
const { body } = validator

export default function UserRules(rule) {
    switch (rule) {
        case 'create_user':
            return [
                body('nome', 'O nome de usuário é obrigatório!').exists(),
                body('nome', 'O nome de usuário deve ter entre 3 e 80 caracteres!').if(body('nome').exists()).isLength({ min: 3, max: 80 }),
                body('email', 'O e-mail de usuário é obrigatório!').exists().normalizeEmail(),
                body('email', 'O e-mail é inválido!').if(body('email').exists()).isEmail(),
                body('senha', 'A senha é obrigatória!').exists(),
                body('senha', 'A senha deve ter entre 3 e 12 caracteres!').if(body('senha').exists()).isLength({ min: 3, max: 12 }),
                body('confirma_senha', 'As senhas não coincidem').custom((v, { req }) => v === req.body.senha),
            ];

        case 'edit_user':
            return [
                body('nome', 'O nome de usuário deve ter entre 3 e 80 caracteres!').optional().isLength({ min: 3, max: 80 }),
                body('email', 'O e-mail é inválido!').optional().isEmail().normalizeEmail(),
                body('nova_senha', 'A senha deve ter entre 3 e 12 caracteres!').optional().isLength({ min: 3, max: 12 }),
                body('confirma_nova_senha', 'As senhas não coincidem!').if(body('nova_senha').exists()).custom((v, { req }) => v === req.body.nova_senha),
                body('senha_atual', 'Sua senha atual é requerida para esta ação!').custom((v, {req}) => !(!v && (req.body.email || req.body.nova_senha)))
            ];
        default:
            return [];
    }
}