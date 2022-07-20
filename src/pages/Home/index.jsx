import './styles.css';
import { Card } from '../../components/Card';

export function Home() {

  return (
    //add a fragment so that the function return is wrapped in a single argument expected by JSX 
    <div className="container">
      <h1>Frequency list for learning ReactJS</h1>
      <input type="text" placeholder="Type your name here..."/>
      <button type="button">Add</button>

      <Card name="Fábio Dantas" time="10:22:57" />
      <Card name="José Silva" time="11:08:15"/>
      <Card name="Ana Maria" time="11:35:52"/>
    </div>
  );
}
