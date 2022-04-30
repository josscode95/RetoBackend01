import { Request, Response } from "express";

import Clients from "../models/clients";

export const postClient = async(req:Request, res:Response) => {

  const { nombre, apellido, edad, fechaNacimiento } = req.body
  const client = new Clients({ nombre, apellido, edad, fechaNacimiento });

  await client.save()

  res.json(client);

}