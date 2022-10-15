import validator from 'express-validator'
const { body } = validator

export default function RefeicaoRules(rule){
    switch (rule) {
        case 'create':
            return [
               body('grupo_id', 'O id do grupo é obrigatório!').exists(),
               body('grupo_id', 'O id do grupo deve ser inteiro!').isInt(),
               body('data', 'A data é obrigatória!').exists(),
               body('data', 'A data inválida!').isDate()
            ];
        default:
            break;
    }
}