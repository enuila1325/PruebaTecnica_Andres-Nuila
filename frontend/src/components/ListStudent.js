import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const StudentsList = () => {
    const [students, setStudent] = useState([]);
    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
        const response = await axios.get("http://localhost:5000/students");
        setStudent(response.data);
    };

    return (
        <div className="columns mt-5">
            <div className="column is-half">
                <Link to="add" className="button is-success">
                    Agregar nuevo alumno
                </Link>
                <table className="table is-striped is-fullwidth mt-2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student._id}>
                                <td>{student.firstName + " " + student.lastName}</td>
                                <td>{student.birth}</td>
                                <td>{student.email}</td>
                                <td>{student.address}</td>
                                <td>{student.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    );

};

export default StudentsList;

