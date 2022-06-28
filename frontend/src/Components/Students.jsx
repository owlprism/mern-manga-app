import React, { useState } from 'react';
import StudentDetails from './StudentsDetails.jsx';
import { studentsMocked } from '../mocks/students.mocks.js';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

const Students = () => {

    const [students, setStudents] = useState(studentsMocked);
    const [selectedStudent, setSelectedStudent] = useState();

    const handleChange = (studentId) => {
        const studentToSelect = students.find((student) => student._id === studentId);
        setSelectedStudent(studentToSelect);
    }

    const removeStudent = (studentToRemove) => {
        const indexToRemove = students.findIndex((student) => student._id === studentToRemove._id);
        students.splice(indexToRemove, 1);
        setSelectedStudent(undefined);
    }

    const updateStudent = (studentToUpdate) => {
        const updatedStudents = students.map((student) => {
            if (student._id === studentToUpdate._id) {
                return studentToUpdate;
            } else {
                return student;
            }
        })
        setStudents(updatedStudents);
    }

    return (
        <div className='App-header'>
            <Card className="StudentCard">
                <Card.Body>
                <div>
                    <Form.Select onChange={(e) => handleChange(e.target.value)}>
                        <option>Sélectionner un étudiant</option>
                        {
                            students.map((student) => {
                                return <option value={student._id}>{student.firstname} {student.name}</option>
                            })
                        }
                    </Form.Select>
                </div>
                {selectedStudent && <StudentDetails student={selectedStudent} removeStudent={removeStudent} updateStudent={updateStudent} />}
                </Card.Body>
            </Card>
            

        </div>
    )
}

export default Students;