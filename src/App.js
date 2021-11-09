import { Button, Container, Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar"
import AppRouter from './components/router/router';

function App() {
  return (
    <div className="App">


      <Navbar />
      <AppRouter/>

    </div>
  );
}

export default App;
