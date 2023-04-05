import { ProductModel } from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
  try{
    const products = await ProductModel.find({})
    res.status(200).json(products)
  }
  catch(error){
    res.status(404).json({ message: error.message })
  }
};

export const getProduct = async (req, res) => {
  try{
    const { id } = req.params
    const product = await ProductModel.findById(id)
    if (!product) {
      return res.status(404).json(`Product with ID: ${id} not found`)
    }
    res.status(200).json(product)
  }
  catch(error){
    res.status(500).json({ message: error.message })
  }
};

export const createProduct = async (req, res) => {
  try{
    const product = await ProductModel.create(req.body)
    res.status(201).json(product)
  }
  catch(error){
    res.status(500).json({ message: 'An error has ocurred' })
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await ProductModel.findOneAndUpdate(
      {
      _id: id
      },
      req.body,
      {
        new: true,  // para que devuelva el producto actualizado
      }
    );
    res.status(200).json(product)
  } 
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await ProductModel.findByIdAndDelete(id)
    if (!product) {
      return res.status(404).json(`Product with ID: ${id} not found`)
    }
    res.status(200).json('Product successfully deleted')
  } 
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// * region crear productos random
export function crearRandomProducts(sizeArray){
  const products = []
  for (let i = 0; i < sizeArray; i++) {
    const product = {
      description: `Description ${i}`,
      price: Math.floor(Math.random() * 190),
      stock: Math.floor(Math.random() * 56),
    }
    products.push(product)
  }
  return products
}

export const createProducts = async (req, res) => {
  try{
    const products = crearRandomProducts(50)
    const product = await ProductModel.insertMany(products)

    res.status(201).json(product)
  }
  catch(error){
    res.status(500).json({ message: 'An error has ocursred' })
  }
}
// * endregion
