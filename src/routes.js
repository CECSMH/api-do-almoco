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

router.post('/usuario/criar', IsLogged, UserRules('create_user'), Checker, UserController.create);

router.post('/grupo/criar', IsLogged, GrupoRules('create_grupo'), Checker, GrupoController.create);

router.get('/', (req, res) => res.send('to aqui'))

export default router;