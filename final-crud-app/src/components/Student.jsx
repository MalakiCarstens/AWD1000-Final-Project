import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning, faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';

function Student(props) {

    const [editMode, setEditMode] = useState(false);
    const[firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gradYear, setGradYear] = useState("");

    useEffect(() => {
        setFirstName(props.student.firstName);
        setLastName(props.student.lastName);
        setEmail(props.student.email);
        setGradYear(props.student.gradYear);
    }, []);

    const saveStudent = () => {
        setEditMode(false);
        const updatedStudent = {firstName:firstName, lastName:lastName, email:email, gradYear, id:props.student.id,image:props.student.id};
        props.updatedStudent(updatedStudent);
    }
    return(
        <div className="card h-100">
              <img className="mx-auto img-fluid" src={props.student.image} alt="picture of student"/>
              {!editMode && 
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">{props.student.firstName}</li>
                <li className="list-group-item text-center">{props.student.lastName}</li>
                <li className="list-group-item text-center">{props.student.email}</li>
                <li className="list-group-item text-center">{props.student.gradYear}</li>
                <button type="button" className="btn btn-danger" onClick={() => props.removeStudent(props.student)}>Delete Student <FontAwesomeIcon icon={faWarning} /></button>
                <button type="button" className="btn btn-warning" onClick={() => setEditMode(true)}>Edit <FontAwesomeIcon icon={faMagicWandSparkles} /></button>
              </ul>
              }
              {editMode && 
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center"><input type="text" className="form-control" value={firstName} oncChange={(evt) => setFirstName(evt.currentTarget.value)}></input></li>
                <li className="list-group-item text-center"><input type="text" className="form-control" value={lastName} oncChange={(evt) => setLastName(evt.currentTarget.value)}></input></li>
                <li className="list-group-item text-center"><input type="email" className="form-control" value={email} oncChange={(evt) => setEmail(evt.currentTarget.value)}></input></li>
                <li className="list-group-item text-center"><input type="text" className="form-control" value={gradYear} oncChange={(evt) => setGradYear(evt.currentTarget.value)}></input></li>
                <li className="list-group-item"><button id="btnSave" className="btn btn-success" onClick={saveStudent}>Save</button></li>
              </ul>}
              </div>

    )
};



export default Student;