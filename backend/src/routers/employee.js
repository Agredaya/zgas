import express from "express";
const router = express.Router();
import employeeControllers from "../controllers/employeeControllers.js"
import { Route } from "express";

router.route("/")
.get(employeeControllers.getEmployee)
.post(employeeControllers.insertEmployee)

router.route("/:id")
.put(employeeControllers.updateEmployee)
.delete(employeeControllers.deleteEmployee)

export default router; 