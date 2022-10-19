import validator from 'express-validator'
const { body, param } = validator

export default function VeiculoRules(rule) {
    switch (rule) {
        case 'create':
            return [
                body('nome', 'O nome do veiculo é obrigatório!').exists(),
                body('nome', 'O nome de veiculo deve ter entre 3 e 80 caracteres!').isLength({ min: 3, max: 80 }),
                body('qtd_lugares', 'A quantidade de lugares é obrigatória!').exists(),
                body('taxa_por_ocupante', 'A taxa por ocupante é obrigatória!').exists(),
                body('taxa_por_ocupante', 'A taxa por ocupante deve ser numérica!').isNumeric(),
            ];
        case 'update':
            return [
                param('id', 'O id do veiculo é obrigatório!').exists(),
                param('id', 'O id do veiculo deve ser inteiro!').if(param('id').exists()).isInt(),
                body('nome', 'O nome de veiculo deve ter entre 3 e 80 caracteres!').optional().isLength({ min: 3, max: 80 }),
                body('qtd_lugares', 'A quantidade de lugares deve ser inteiro!').optional().isInt(),
                body('taxa_por_ocupante', 'A taxa por ocupante deve ser numérica!').optional().isNumeric(),
                body('isDefault', 'O parâmentro de veiculo padrão deve ser booleano!').optional().isBoolean(),
            ];
        default:
            break;
    }
}