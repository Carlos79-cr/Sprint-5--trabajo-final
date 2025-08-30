// Importamos el modulo mongoose para interactuar con MongoDB desdes Node.js
import mongoose from 'mongoose';

// Definimos una funcion asincrona que se encargara de conectar nuesta aplicacion a la base de datos
export async function connectDB() {
    try {
         // Intentamos conectarnos a MongoDB usando una URI de conexion con credenciales y nombre de cluster
        await mongoose.connect('mongodb+srv://Grupo-18:grupo18@cursadanodejs.ls9ii.mongodb.net/Node-js');
        console.log('Conexión exitosa a MongoDB'); // si la conxion fue exitosa se muestra este mensaje
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error); // si ocurre un error durante la conexion lo mostramos en consola
        process.exit(1); // finalizamos el proceso con un codigo de error (1) para indicar que algo salio mal
    }
}