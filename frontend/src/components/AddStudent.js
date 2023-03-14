import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [birth, setBirth] = useState("");
    const [gender, setGender] = useState("Female")
    const navigate = useNavigate();

    const saveStudent = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/students", {
                firstName,
                lastName,
                email,
                birth,
                address,
                gender,
            });
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="columns mt-5">
            <div className="column is-half">
                <form onSubmit={saveStudent}>
                    <div className="field">
                        <label className="label">First Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Last Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="example@example.com"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Date of Birth</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={birth}
                                onChange={(e) => setBirth(e.target.value)}
                                placeholder="12/12/2023"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Address</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Address"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Gender</label>
                        <div className="select is-fullwidth">
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success" onClick={saveStudent}>
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default AddStudent;