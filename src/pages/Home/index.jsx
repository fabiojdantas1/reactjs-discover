import React, { useState} from 'react';
import './styles.css';

import { Card } from '../../components/Card';

export function Home() {

  //uses state to reflect variable value in app interface via reaction reconciliation algorithm
  const [studentName, setStudentName] = useState();

  return (
    //add a fragment so that the function return is wrapped in a single argument expected by JSX 
    <div className="container">
      <h1>Name: {studentName}</h1>
      <input 
        type="text" 
        placeholder="Type your name here..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button">Add</button>

      <Card name="Fábio Dantas" time="10:22:57" />
      <Card name="José Silva" time="11:08:15"/>
      <Card name="Ana Maria" time="11:35:52"/>
    </div>
  );
}
