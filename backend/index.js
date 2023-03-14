import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import StudentRoute from "./routes/StudentRoute.js";

const app = express();

//Conección hacia BD en MongoDB (bd_estudiantes) en localhost y puerto 27017 (propio de MongoDB)
mongoose.connect('mongodb://localhost:27017/bd_estudiantes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
/*Muestra mensaje de error en caso de haberlo al intentar entrar a BD, 
si no, procede e imprimie en consola mensaje de confirmacion*/
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Conexion exitosa'));


app.use(cors());
app.use(express.json());
app.use(StudentRoute);

//Server en puerto 5000
app.listen(5000, () => console.log('Servidor corriendo'));