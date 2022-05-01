"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateRandom = void 0;
const dateRandom = (fecha) => {
    const date = (Math.random()).toString();
    const day = Number(date.slice(2, 3));
    const month = Number(date.slice(15, 16));
    const year = Number(date.slice(6, 8));
    const arrStr = fecha.split('-');
    const newArr = [];
    if (Number(arrStr[0]) + day < 31) {
        newArr.push(Number(arrStr[0]) + day);
    }
    else {
        newArr.push(31);
    }
    if (Number(arrStr[1]) + month < 12) {
        newArr.push(Number(arrStr[1]));
    }
    else {
        newArr.push('0' + month);
    }
    newArr.push(Number(arrStr[2]) + year);
    return newArr.join('-');
};
exports.dateRandom = dateRandom;
//PULIR LAS FECHAS Y FORMAT '04'
//FALTA SOLO DOCUMENTAR API
//SUBIR A HEROKU
