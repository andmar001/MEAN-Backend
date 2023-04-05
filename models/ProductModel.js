import mongoose from 'mongoose';

// creamos un schema para el modelo
const productSchema = mongoose.Schema(
  {
    descripcion : {
      type: String,
      required: [ true,"Please complete this field" ]
    },
    stock : {
      type: Number,
      required: [ true,"Please complete this field" ]
    },
    precio : {
      type: Number,
      required: [ true,"Please complete this field" ]
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

//modelo a partir del schema
export const ProductModel = mongoose.model('Product', productSchema);