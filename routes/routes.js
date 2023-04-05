import express from 'express';
import { getProducts, getProduct,createProduct,updateProduct, deleteProduct } from '../controllers/ProductController.js';

const router = express.Router()

// forma 1 de definir las rutas
// router.get('/', getProducts)
// router.get('/:id', getProduct)
// router.post('/', createProduct)
// router.put('/:id', updateProduct)
// router.delete('/:id', deleteProduct)

// forma 2 de definir las rutas - agrupando las rutas
router.route('/').get(getProducts).post(createProduct)
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)

export default router