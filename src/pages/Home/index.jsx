import './styles.css';
import { Card } from '../../components/Card';

export function Home() {

  return (
    //add a fragment so that the function return is wrapped in a single argument expected by JSX 
    <div className="container">
      <h1>Frequency list for learning ReactJS</h1>
      <input type="text" placeholder="Type your name here..."/>
      <button type="button">Add</button>

      <Card />
      <Card />
      <Card />
      
    </div>
  );
}
