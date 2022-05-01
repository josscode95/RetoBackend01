"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const clientController_1 = require("../controller/clientController");
const date_validator_1 = require("../helpers/date-validator");
const validarCampos_1 = require("../middlewares/validarCampos");
const router = (0, express_1.Router)();
//POST /creacliente
router.post('/creacliente', [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('apellido', 'El apellido es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('edad', 'Tiene que colocar su edad').isNumeric(),
    (0, express_validator_1.check)('fechaNacimiento').custom(date_validator_1.isValidateDate),
    validarCampos_1.validarCampos
], clientController_1.postClient);
//GET /kpideclientes
router.get("/kpideclientes", clientController_1.getPideClientes);
//GET /listclientes
router.get("/listclientes", clientController_1.getListClients);
module.exports = router;
