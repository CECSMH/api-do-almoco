import { Router } from "express";

import UserController from "./controller/UserController.js";

import UserRules from "./middlewares/UserRules.js";
import Checker from "./middlewares/Checker.js";
import AuthController from "./controller/AuthController.js";
import AuthRules from "./middlewares/AuthRules.js";
import IsLogged from "./middlewares/IsLogged.js";
import GrupoRules from "./middlewares/GrupoRules.js";
import GrupoController from "./controller/GrupoController.js";

const router = Router();

router.post('/login', AuthRules(), Checker, AuthController.login);

router.post('/usuario/criar', UserRules('create_user'), Checker, UserController.create);

router.post('/grupo/criar', IsLogged, GrupoRules('create_grupo'), Checker, GrupoController.create);
router.put('/grupo/adicionar', IsLogged, GrupoRules('add_member'), Checker, GrupoController.add_member);
router.get('/grupo/membros/:id', IsLogged, GrupoRules('get_members'), Checker, GrupoController.get_members);
router.get('/grupo/todos', IsLogged, GrupoController.getAll);

router.get('/', (req, res) => res.send('to aqui'))

export default router;