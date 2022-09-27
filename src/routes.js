import { Router } from "express";

import UserController from "./controller/UserController.js";

import UserRules from "./middlewares/UserRules.js";
import Checker from "./middlewares/Checker.js";

const router = Router();

router.post('/usuario/criar', UserRules('create_user'), Checker, UserController.create);

router.get('/', (req, res) => res.send('to aqui'))

export default router;