import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage'
import Users from './Components/Users'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddUser from './Components/AddUser'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';


function App() {
  const [update, setUpdate] = useState(0);
  const [showAdder, setShowAdder] = useState(false);
  const addUser = () => {
    setShowAdder(e => !e);
  };
  return (
    <div style={{textAlign: 'center'}}>
      <Homepage />
      <Button variant="info"style={{marginTop:'20px', width: '50%'}} onClick={addUser}>Add New User</Button>
      <Container>
        <Row>
          {showAdder && <AddUser userAdded={addUser} setUpdate={setUpdate}/>}
          <Users update={update}/>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
