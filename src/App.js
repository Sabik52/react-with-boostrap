
import { Button } from 'bootstrap';
import { Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './Components/CardGrop2/CardGroup2';


function App() {
  return (
    <div className="App">
      <h1>Using React Boostrap </h1>
     
      <br />
      <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
<CardGroup2></CardGroup2>
      
     
    </div>
  );
}

export default App;
