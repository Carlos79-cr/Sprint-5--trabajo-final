// Importa mongoose, una biblioteca ODM (Object Data Modeling) para MongoDB
import mongoose from 'mongoose';

// Define el esquema de Mongoose para un documento del modelo Pais
const PaisSchema = new mongoose.Schema({
   
  name: {             // Campo 'name', que es un objeto con varias propiedades
      common: String,
     official: String,
    spa: {
      common: String,
      official: { type: String}
    }
  },
   
  capital: [String],  // Campo 'capital': array de strings (puede haber más de una capital)
  
  borders: [String],  // Campo 'borders': array de strings que representa códigos de países fronterizos
  
  area: Number, // Campo 'area': número que representa el área del país en km²

  
  population: Number, // Campo 'population': número que representa la población del país

  
  gini: {         // Campo 'gini': un mapa de año → valor del índice de Gini (número entre 0 y 100)
    type: Map,  // Tipo Mongoose para representar objetos dinámicos
    of: Number   // Cada valor del mapa debe ser un número
  },

  timezones: [String],   // Campo 'timezones': array de strings con las zonas horarias del país

  
  creador: String // Campo 'creador': string que representa quién registró el país
});


const Pais = mongoose.model('Pais', PaisSchema, 'Grupo-18');  // Crea el modelo 'Pais' basado en el esquema definido y lo asocia con la colección 'Grupo-18'


export default Pais; // Exporta el modelo para poder usarlo en otras partes del proyecto