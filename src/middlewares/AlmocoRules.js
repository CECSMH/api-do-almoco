import validator from 'express-validator'
const { body } = validator

export default function AlmocoRules(rule){
    switch (rule) {
        case 'create_almoco':
            return [
               
            ];
        default:
            break;
    }
}