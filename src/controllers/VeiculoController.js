import db from "../models/index.js";
import { foreach } from "../utils/utils.js";



export default new class VeiculoController {

    async create(req, res) {

        const veiculo = {};

        veiculo.usuarioId = req.user.id;
        veiculo.nome = req.body.nome;
        veiculo.qtd_lugares = req.body.qtd_lugares;
        veiculo.taxa_por_ocupante = req.body.taxa_por_ocupante || 0;

        const exception = (err) => {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro interno no servidor!' });
        };

        const success = (data) => {
            return res.status(200).json({ status: 'success', data });
        };

        await db.Veiculo.create(veiculo).then(success).catch(exception);
    };


    async getAll(req, res) {
        const exception = (err) => {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro interno no servidor!' });
        };

        const success = (data) => {
            return res.status(200).json({ status: 'success', data });
        };

        await db.Veiculo.findAll({ where: { usuarioId: req.user.id }, attributes: ['id', 'nome', 'qtd_lugares', 'isDefault'] }).then(success).catch(exception);
    };


    async update(req, res) {
        const veiculo = {};

        foreach(['nome', 'qtd_lugares', 'taxa_por_ocupante', 'isDefault'], e => req.body[e] && (veiculo[e] = req.body[e]));

        const exception = (err) => {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro interno no servidor!' });
        };

        const success = async (re) => {
            if (!re) return res.status(400).json({ status: 'bad request', msg: 'Veiculo não encontrado!' });

            if (veiculo.isDefault !== undefined) await db.Veiculo.update({ isDefault: false }, { where: { usuarioId: req.user.id } });

            await re.update(veiculo).then(data => {
                return res.status(200).json({ status: 'success', data });
            }).catch(exception);
        };

        db.Veiculo.findOne({ where: { usuarioId: req.user.id, id: req.params.id } }).then(success).catch(exception);
    };
};