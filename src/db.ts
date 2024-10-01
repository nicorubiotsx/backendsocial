import mongoose  from 'mongoose';


export async function  main() {
 const mongodbconnection = await mongoose.connect('mongodb://127.0.0.1:27017/backend');


 if (mongodbconnection.connection.readyState === 1) {
  console.log('Base de datos conectada');
} else {
  console.log('No conectada. Estado:', mongoose.connection.readyState);
}
 
}