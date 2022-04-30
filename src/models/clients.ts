import mongoose, { Schema } from 'mongoose';

interface IClientSchema{
  nombre:string;
  apellido:string;
  edad:number;
  fechaNacimiento:Date;
}

const ClientSchema = new Schema<IClientSchema>({

})