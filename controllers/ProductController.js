import { ProductModel } from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
  res.json({
    msg: "getProducts"
  })
};

export const getProduct = async (req, res) => {
  const { id } = req.params
  res.json({
    id
  })
};

export const createProduct = async (req, res) => {
  const data = req.body
  res.json({
    data
  })
};

export const updateProduct = async (req, res) => {
  res.json({
    msg: "updateProducts"
  })
}

export const deleteProduct = async (req, res) => {
  res.json({
    msg: "deleteProducts"
  })
}