import express from "express";
const router = express.Router();
import productCrontrollers from "../controllers/productControllers.js"
import { Route } from "express";

router.route("/")
.get(productCrontrollers.getProducts)
.post(productCrontrollers.insertProducts)

router.route("/:id")
.put(productCrontrollers.updateProducts)
.delete(productCrontrollers.deleteProducts)

export default router; 