import express from "express";
const router = express.Router();
import clientControllers from "../controllers/clientControllers.js"
import { Route } from "express";

router.route("/")
.get(clientControllers.getClients)
.post(clientControllers.insertClients)

router.route("/:id")
.put(clientControllers.updateClients)
.delete(clientControllers.deleteClients)

export default router; 