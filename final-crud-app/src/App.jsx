import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import React, {useState, useEffect} from 'react';
import AddStudent from './components/addStudents';
import _ from 'lodash';
import Student from './components/student';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



function App() {
  const [allStudents, setAllStudents] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keyWords, setKeyWords] = useState("");
  const [gradYear, setGradYear] = useState("");

  useEffect(() => {
    saveStudents(students);
  }, []);

  const saveStudents = (students) => {
    setAllStudents(students);
    setSearchResults(students);
  }

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent];
    saveStudents(updatedStudents);
  }

  const searchStudents = () => {
    let keywordsArray = [];

    if (keyWords) {
      keywordsArray = keyWords.toLowerCase(). split(' ');
    }

    if(gradYear) {
      keywordsArray.push(gradYear.toString());
    }


    if(keywordsArray.length > 0) {
      const searchResults = allStudents.filter(student =>{
        for(const word of keywordsArray) {
          if(student.firstName.toLowerCase().includes(word) || student.lastName.toLowerCase().includes(word) || student.gradYear === parseInt(word)) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
    }
    else {
      setSearchResults(allStudents);
    }
  }


  const removeStudent = (studentToDelete) => {
    console.table(studentToDelete);
    const updatedStudentsArray = allStudents.filter(student => student.id !== studentToDelete.id);
    saveStudents(updatedStudentsArray);
  }

  const updateStudent = (updatedStudent) => {
    const updatedStudentsArray = allStudents.map(student => student.id === updatedStudent.id ? {...student, ...updateStudent} : student);
    saveStudents(updatedStudentsArray);
  }

  const students = [{
    id: nanoid(),
    first_name: "Garey",
    last_name: "Clayal",
    email: "gclayal0@addthis.com",
    image: 'dist/img/Emanuel-Kol.jpg',
    gradYear: 2004
  }, {
    id: nanoid(),
    first_name: "Perrine",
    last_name: "Hailwood",
    email: "phailwood1@geocities.com",
    image: 'dist/img/James-Louke.jpg',
    gradYear: 2004
  }, {
    id: nanoid(),
    first_name: "Nichole",
    last_name: "Birney",
    email: "nbirney2@squidoo.com",
    image: '/img/Emanuel-Kol.jpg',
    gradYear: 2006
  }, {
    id: nanoid(),
    first_name: "Kati",
    last_name: "Firpi",
    email: "kfirpi3@ed.gov",
    image: '/img/Lia-Miller.jpg',
    gradYear: 2005
  }, {
    id: nanoid(),
    first_name: "Alick",
    last_name: "Staresmeare",
    email: "astaresmeare4@ihg.com",
    image: '/img/Indie-Kira.jpg',
    gradYear: 2004
  }, {
    id: nanoid(),
    first_name: "Gualterio",
    last_name: "Cotta",
    email: "gcotta5@ocn.ne.jp",
    image: '/img/Emanuel-Kol.jpg',
    gradYear: 2006
  }, {
    id: nanoid(),
    first_name: "Kassandra",
    last_name: "Oboy",
    email: "koboy6@indiatimes.com",
    image: '/img/James-Louke.jpg',
    gradYear: 2005
  }, {
    id: nanoid(),
    first_name: "Clemmy",
    last_name: "Shutle",
    email: "cshutle7@blogger.com",
    image: '/img/Emanuel-Kol.jpg',
    gradYear: 2006
  }, {
    id: nanoid(),
    first_name: "Kristine",
    last_name: "Nuzzi",
    email: "knuzzi8@desdev.cn",
    image: '/img/Indie-Kira.jpg',
    gradYear: 2004
  }, {
    id: nanoid(),
    first_name: "Mirabella",
    last_name: "McCalister",
    email: "mmccalister9@harvard.edu",
    image: '/img/Lia-Miller.jpg',
    gradYear: 2005
  }];

  return (
    <div className="container">

      <div className="row" id="allStudents">
        <h1>Enrolled Students</h1>
        {searchResults && searchResults.map((student) =>
        (
          <div className="col-md-2" key={student.id}>
            <Student student={student} removeStudent={removeStudent} updatedStudent={updateStudent} />
            </div>)
        )}

      </div>

      {/*!allStudents && <button type="button" className="btn btn-lg btn-success" onClick={() => saveStudents(students)}>Save Students</button>*/}
      <AddStudent addStudent={addStudent}/>
      <div className="row mt-5" id="searchStudents">
        <h2>Search Students</h2>
      <div className="col-md-4">
      <label htmlFor="textKeywords">Search by First Name or Last Name</label>
      <input type="text" className="form-control" placeholder="Malaki Carstens" onChange={evt => setKeyWords(evt.currentTarget.value)} value={keyWords}/>
    </div>
    <div className="col-md-4">
      <select value={gradYear} onChange={evt => setGradYear(evt.currentTarget.value)} className="form-select">
        <option value="">Select Year</option>
        {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
      </select>
      </div>
      <div className="col-md-4">
        <button type="button" className="btn btn-success" onClick={searchStudents}>Search <FontAwesomeIcon icon={faSearch} /></button>
      </div>
      </div>
      </div>
  );
  

}
  

export default App
