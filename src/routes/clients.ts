import { Router } from "express";
import { check } from "express-validator";

const router = Router();

router.post(
  '/creacliente',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('edad', 'Tiene que colocar su edad').isNumeric(),
    check('fecha-nacimiento', 'Coloque su fecha de nacimiento').isISO8601().toDate()
  ],
  // postClient
)

module.exports = router;