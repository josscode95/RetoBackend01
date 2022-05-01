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
  const arrEdades:Number[] = [];
  const current = 0;

  resp.map(client => {
    arrEdades.push(client.edad);
  })
  const result:any = arrEdades.reduce((a:any, b:any) => a + b, current);
  const promedioEdad = (result/arrEdades.length).toFixed(2)

  //XXXXXXXXXXXXXXXXXXX====XXXXXXXXXXXXXXXXXXXXXXXXXX

  const edadesCuadrado:any = [];
  arrEdades.map((n:any) => {
    edadesCuadrado.push(n**2)
  })
  const resultSumCuadrado:any = edadesCuadrado.reduce((a:any, b:any) => a + b, current)
  const resultFormula = (resultSumCuadrado/arrEdades.length) - (Number(promedioEdad)**2)
  const desviacionStandar = Math.sqrt(resultFormula).toFixed(2);

  res.json({
    "promedioEdadClientes": promedioEdad,
    "desviacionStandarClientes": desviacionStandar
  })

}