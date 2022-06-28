import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'

const StudentDetails = ({student, removeStudent, updateStudent}) => {

    const [editing, setEditing] = useState(false);

    const [newName, setNewName] = useState();
    const [newFirstname, setNewFirstname] = useState();
    const [newAge, setNewAge] = useState();

    const validate = () => {
        
        if(newName) student.name = newName;
        if(newFirstname) student.firstname = newFirstname;
        if(newAge) student.age = newAge;

        updateStudent(student);

        setNewName(undefined);
        setNewFirstname(undefined);
        setNewAge(undefined);

        setEditing(false);

    }

    return (
        <div>
            {
                editing ? (
                    <div>
                        <div><label>Nom : </label> <input placeholder={student.name} onChange={(e) => setNewName(e.target.value)}/></div>
                        <div><label>Prénom : </label> <input placeholder={student.firstname} onChange={(e) => setNewFirstname(e.target.value)}/></div>
                        <div><label>Age : </label> <input placeholder={student.age} onChange={(e) => setNewAge(e.target.value)}/></div>
                        <Button variant="secondary" onClick={() => validate()}>Valider</Button>
                        <Button variant="secondary" onClick={() => setEditing(false)}>Annuler</Button>
                    </div>
                ) : 
                (
                    <div>
                        <div><label>Nom : </label> {student.name}</div>
                        <div><label>Prénom : </label> {student.firstname}</div>
                        <div><label>Age : </label> {student.age}</div>
                        <Button variant="secondary" onClick={() => setEditing(true)}>Modifier l'étudiant</Button>
                        <Button variant="danger" onClick={() => removeStudent(student)}>Supprimer l'étudiant</Button>
                    </div>
                )
            }
            
        </div> 
    )
}

export default StudentDetails;