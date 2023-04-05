# creacion de método
export const createProduct = async (req, res) => {
  const product = req.body
  const newProduct = new ProductModel(product)
  try{
    await newProduct.save()
    res.status(201).json(newProduct)
  }
  catch(error){
    res.status(409).json({ message: error.message })
  }
};
