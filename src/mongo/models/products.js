const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: { type: [{ type: String, required: true }], default: [] },
    /*
        El siguiente 'user' debe coincidir con el nombre del modelo
        Objetivo: Guardar ID del usuario que esta creando objetos product
    */
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);

// El nombre del modelo 'product' puede ser cualquiera, pero va a dar el nombre de la coleccion en mongo.
// Product -> products , Category -> categories, etc.
const model = mongoose.model('Product', productSchema);

module.exports = model;
