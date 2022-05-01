"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListClients = exports.getPideClientes = exports.postClient = void 0;
const date_random_1 = require("../helpers/date-random");
const clients_1 = __importDefault(require("../models/clients"));
const postClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, edad, fechaNacimiento } = req.body;
    const fechaFallecimiento = (0, date_random_1.dateRandom)(fechaNacimiento);
    const client = new clients_1.default({ nombre, apellido, edad, fechaNacimiento, fechaFallecimiento });
    yield client.save();
    res.json({
        "nombre": client.nombre,
        "apellido": client.apellido,
        "edad": client.edad,
        "fechaNacimiento": client.fechaNacimiento
    });
});
exports.postClient = postClient;
const getPideClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield clients_1.default.find();
    const arrEdades = [];
    const current = 0;
    resp.map(client => {
        arrEdades.push(client.edad);
    });
    const result = arrEdades.reduce((a, b) => a + b, current);
    const promedioEdad = (result / arrEdades.length).toFixed(2);
    //XXXXXXXXXXXXXXXXXXX====XXXXXXXXXXXXXXXXXXXXXXXXXX
    const edadesCuadrado = [];
    arrEdades.map(n => {
        edadesCuadrado.push(n ** 2);
    });
    const resultSumCuadrado = edadesCuadrado.reduce((a, b) => a + b, current);
    const resultFormula = (resultSumCuadrado / arrEdades.length) - (Number(promedioEdad) ** 2);
    const desviacionStandar = Math.sqrt(resultFormula).toFixed(2);
    res.json({
        "promedioEdadClientes": promedioEdad,
        "desviacionStandarClientes": desviacionStandar
    });
});
exports.getPideClientes = getPideClientes;
const getListClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield clients_1.default.find();
    res.json(resp);
});
exports.getListClients = getListClients;
