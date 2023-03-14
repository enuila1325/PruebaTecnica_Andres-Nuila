import express from "express";
import {
    getEstudiantes,
    saveEstudiante
} from "../controllers/StudentController.js";

const router = express.Router();

//Solo se necesita listar y guardar estudiantes
router.get('/students', getEstudiantes);
router.post('/students', saveEstudiante)

export default router;