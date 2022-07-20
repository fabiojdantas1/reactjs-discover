import './style.css';

export function Home() {

  return (
    //add a fragment so that the function return is wrapped in a single argument expected by JSX 
    <div className="container">
      <h1>Learning about React</h1>
      <input type="text" placeholder="Type your name here..."/>
      <button type="button">Add</button>
    </div>
  );
}
