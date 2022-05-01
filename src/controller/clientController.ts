import { Request, Response } from "express";

import Clients from "../models/clients";

export const postClient = async(req:Request, res:Response) => {

  const { nombre, apellido, edad, fechaNacimiento } = req.body
  const client = new Clients({ nombre, apellido, edad, fechaNacimiento });

  await client.save()

  res.json(client);

}

export const getPideClientes = async(req:Request, res:Response) => {

  const resp = await Clients.find();
  const arrEdades:number[] = [];
  const current:number = 0;

  resp.map(client => {
    arrEdades.push(client.edad);
  })
  const result:number = arrEdades.reduce((a:number, b:number) => a + b, current);
  const promedioEdad = (result/arrEdades.length).toFixed(2)

  //XXXXXXXXXXXXXXXXXXX====XXXXXXXXXXXXXXXXXXXXXXXXXX

  const edadesCuadrado:number[] = [];
  arrEdades.map(n => {
    edadesCuadrado.push(n**2)
  })
  const resultSumCuadrado:number = edadesCuadrado.reduce((a:number, b:number) => a + b, current)
  const resultFormula = (resultSumCuadrado/arrEdades.length) - (Number(promedioEdad)**2)
  const desviacionStandar = Math.sqrt(resultFormula).toFixed(2);

  res.json({
    "promedioEdadClientes": promedioEdad,
    "desviacionStandarClientes": desviacionStandar
  })

}

//PROBAR PORQUE HE COLCOADO LOS TYPES