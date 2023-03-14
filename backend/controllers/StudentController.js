import Student from "../models/StudentModel.js";

export const getEstudiantes = async(req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        console.log("Hubo error")
        res.status(500).json({ message: error.message });
    }
}

export const saveEstudiante = async(req, res) => {
    const newStudent = new Student(req.body);
    try {
        const insertStudent = await newStudent.save();
        res.status(201).json(insertStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}