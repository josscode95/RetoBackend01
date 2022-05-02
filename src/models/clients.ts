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
    type: String,
    required: [true, "Fecha de nacimiento es requerido"]
  },
  fechaFallecimiento:{
    type: String
  }
})

ClientSchema.methods.toJSON = function(){
  const { __v, _id , ...data } = this.toObject();
  return data;
}

export default mongoose.model('Clients', ClientSchema);