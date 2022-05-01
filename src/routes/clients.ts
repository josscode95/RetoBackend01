import { Router } from "express";
import { check } from "express-validator";
import { getListClients, getPideClientes, postClient } from "../controller/clientController";
import { isValidateDate } from "../helpers/date-validator";
import { validarCampos } from "../middlewares/validarCampos";

const router = Router();

//POST /creacliente
router.post(
  '/creacliente',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('edad', 'Tiene que colocar su edad').isNumeric(),
    check('fechaNacimiento').custom(isValidateDate),
    validarCampos
  ],
  postClient
)

//GET /kpideclientes
router.get("/kpideclientes", getPideClientes);

//GET /listclientes
router.get("/listclientes", getListClients);

module.exports = router;