import React, { useState} from 'react';
import './styles.css';

import { Card } from '../../components/Card';

export function Home() {

  //add state to reflect variable value in app interface via react' reconciliation algorithm
  const [studentName, setStudentName] = useState();

  //add immutability to replace the previous state with a new state
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    //gets the previous state and add a new element to the vector content to create a new state
    //uses Spread Operator (...) on vector to get content only
    setStudents(previousState => [...previousState, newStudent]);
  }

  return (
    //add a fragment so that the function return is wrapped in a single argument expected by JSX 
    <div className="container">
      <header>
        <h1>Frequency list</h1>
        <div>
          <strong>Fábio</strong>
          <img src="https://github.com/fabiojdantas1.png" alt="profile picture" />
        </div>
      </header>
      <input 
        type="text" 
        placeholder="Type your name here..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button 
        type="button" 
        onClick={handleAddStudent}>
          Add
      </button>
      
      {
        students.map(student => (
          <Card
            //add a unique key to each child in list 
            key={student.time}
            name={student.name} 
            time={student.time} 
          />
        ))
      }
    </div>
  );
}
