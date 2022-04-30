import mongoose, { Schema } from 'mongoose';

interface IClientSchema{
  nombre:string;
  apellido:string;
  edad:number;
  fechaNacimiento:string;
  fechaFallecimiento:string;
}

const ClientSchema = new Schema<IClientSchema>({
  nombre:{
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  apellido:{
    type: String,
    required: [true, 'El apellido es obligatorio']
  },
  edad: {
    type: Number,
    required: [true, 'La edad es requerida']
  },
  fechaNacimiento:{
    type: String
  },
  fechaFallecimiento:{
    type: String
  }
})

export default mongoose.model('Clients', ClientSchema);