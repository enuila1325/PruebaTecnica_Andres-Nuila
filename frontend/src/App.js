import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentsList from "./components/ListStudent";
import AddStudent from "./components/AddStudent";

function App() {
    return (
        <BrowserRouter>
            <div className="conntainer">
                <Routes>
                    <Route path="/" element={<StudentsList />} />
                    <Route path="add" element={<AddStudent />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;