import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';



function AddStudent(props) {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const [gradYear, setGradYear] = useState();

    const doWork = () => {
        const newStudent = {"id":nanoid(), "firstName": firstName, "lastName": lastName, "email": email, "image": URL.createObjectURL(selectedFile), "gradYear": parseInt(gradYear)};
        props.AddStudent(newStudent);
    }

    const imageUpdate = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    return (
        <div className="row mt-4 bg-primary  p-m-5">
            <h3>Add Student</h3>
            <div className="col md-2 m-3">
                <label htmlFor="txtFirstName" className="form-label">First Name:</label>
                <input type="text" id="txtFirstName" placeholder="First Name" className="form-control" onChange={(evt) => setFirstName(evt.currentTarget.value)} value={firstName}></input>
            </div>

            <div className="col md-2 m-3">
                <label htmlFor="txtLastName" className="form-label">Last Name:</label>
                <input type="text" id="txtLastName" placeholder="Last Name" className="form-control" onChange={(evt) => setLastName(evt.currentTarget.value)} value={lastName}></input>
            </div>

            <div className="col md-2 m-3">
                <label htmlFor="txtEmail" className="form-label">Email Address:</label>
                <input type="text" id="txtEmail" placeholder="Email Address" className="form-control" onChange={(evt) => setEmail(evt.currentTarget.value)} value={email}></input>
            </div>

            <div className="col md-2 m-3">
                <label htmlFor="fileUpload" className="form-label">Student Image</label>
                <input type="text" id="file" placeholder="fileUpload" className="form-control" onChange={imageUpdate}></input>
            </div>

            <div className="col md-2 m-3">
                <label htmlFor="txtGradYear" className="form-label">Graduation Year:</label>
                <input type="text" id="txtGradYear" placeholder="2000" className="form-control" onChange={(evt) => setGradYear(evt.currentTarget.value)} value={gradYear}></input>
            </div>
            <div className="col-md-2">
                <button type="button" id="btnAdd" className="btn btn-success" onClick={doWork}>Add Students <FontAwesomeIcon icon={faPlusCircle} /></button>
            </div>
        </div>

    )
}

export default AddStudent;