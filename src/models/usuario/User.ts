import mongoose, { Document, Schema } from 'mongoose';
import Post from '../post/Post';

// Definir la interfaz para el documento de Usuario
interface IUsuario extends Document {
  nombre: string;
  email: string;
  contraseña: string;
  fechaDeRegistro?: Date;
  posts :string[]
}

// Definir el esquema del Usuario
const usuarioSchema = new Schema<IUsuario>({
  nombre: {
    type: String,
    required: true,
    trim: true,
  
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  contraseña: {
    type: String,
    required: true,
    minlength: 6
  },
  posts: [{type:Schema.Types.ObjectId,ref:'Post'}]
  ,
  fechaDeRegistro: {
    type: Date,
    default: Date.now()
  }
});

// Crear el modelo basado en el esquema
const Usuario = mongoose.model<IUsuario>('Usuario', usuarioSchema);

// Exportar el modelo
export default Usuario;
