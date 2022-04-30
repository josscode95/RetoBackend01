import { Router } from "express";
import { check } from "express-validator";
import { postClient } from "../controller/clientController";
import { validarCampos } from "../middlewares/validarCampos";

const router = Router();

router.post(
  '/creacliente',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('edad', 'Tiene que colocar su edad').isNumeric(),
    check('fechaNacimiento', 'Escribir en el siguiente formato YYYY-MM-DD').isISO8601().toDate(),
    validarCampos
  ],
  postClient
)

module.exports = router;