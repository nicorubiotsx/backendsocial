import mongoose, { Document, ObjectId, Schema } from 'mongoose';

// Definir la interfaz para el documento de Usuario
interface IPost extends Document {
  descripcion: string;
    imagen?:string
  fechaDeRegistro?: Date;
  autor:ObjectId | string;  
}

// Definir el esquema del Usuario
const postSchema = new Schema<IPost>({
  descripcion: {
    type: String,
    required: true,
    trim: true
  },

  imagen: {
    type: String,
    required: true,
 
  },
  fechaDeRegistro: {
    type: Date,
    default: Date.now()
  },
  autor:{type:Schema.Types.ObjectId,ref:'Usuario'}
});

// Crear el modelo basado en el esquema
const Post = mongoose.model<IPost>('Post', postSchema);

// Exportar el modelo
export default Post;
