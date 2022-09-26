import { Router } from "express";

import UserController from "./controller/UserController.js";

import UserRules from "./middlewares/UserRules.js";

const router = Router();

import {check, validationResult} from 'express-validator';
router.post('/usuario/criar', UserRules('create_user'),(req, res) => {
    const erros = validationResult(req);
    console.log(req.body)
    if (!erros.isEmpty()) {
        return res.status(422).jsonp(erros.array());
      } else {
        res.send({});
      }
} ,UserController.create);



export default router;