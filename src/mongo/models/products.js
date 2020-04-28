const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: [{ type: String, required: true }],
    /*
        El siguiente 'user' debe coincidir con el nombre del modelo
        Objetivo: Guardar ID del usuario que esta creando objetos product
    */
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

// El nombre del modelo 'product' puede ser cualquiera.
const model = mongoose.model('product', productSchema);

module.exports = model;
