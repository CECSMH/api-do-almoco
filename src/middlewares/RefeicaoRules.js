import validator from 'express-validator'
const { body, param } = validator

export default function RefeicaoRules(rule){
    switch (rule) {
        case 'create':
            return [
               body('grupo_id', 'O id do grupo é obrigatório!').exists(),
               body('grupo_id', 'O id do grupo deve ser inteiro!').isInt(),
               body('data', 'A data é obrigatória!').exists(),
               body('data', 'A data inválida!').isDate()
            ];
        case 'add_part':
            return [
                body('refeicao_id', 'O id da refeição é obrigatório!').exists(),
                body('refeicao_id', 'O id da refeição deve ser interio!').if(body('refeicao_id').exists()).isInt(),
            ]
            case 'get_parts':
                return [
                    param('id', 'O id da refeição é obrigatório!').exists(),
                    param('id', 'O id da refeição deve ser inteiro!').if(param('id').exists()).isInt()
                ];
        default:
            break;
    }
}