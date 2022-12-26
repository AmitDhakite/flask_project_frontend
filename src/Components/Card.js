import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import axios from '../axios';
import Spinner from 'react-bootstrap/Spinner';

function Car({name, id, address, contact, email, deleteUser}) {
  const delet = () => {
    deleteUser(id);
  }
  const [form, setForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateUser = async () => {    
    try {
      setLoading(true);
      const res = await axios.put("/updateUser/" + id, curUser);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    
    setForm(false);
  };

  const [curUser, setCurUser] = useState({
    name,
    contact,
    email,
    address
  });

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setCurUser((u) => {
        return {
            ...u,
            [name]: value
        }
    });
  };

  return (
    <Card style={{ width: '20rem', height:'400px', margin:'40px', backgroundImage: 'linear-gradient(#FD6585, #0D25B9)'}}>
      {form ? <Form style={{marginTop:"25px", fontSize:'15px'}}>
        <h5>Update details</h5>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={changeHandler} name="name" value = {curUser.name} type="email" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control  onChange={changeHandler} name="email" value = {curUser.email} type="email" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Contact</Form.Label>
        <Form.Control  onChange={changeHandler} name="contact" value = {curUser.contact} type="email" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control onChange={changeHandler} name="address"  value = {curUser.address} type="email" placeholder="Enter name" />
      </Form.Group>
      {loading ? <Spinner style={{margin:'10px 120px'}} animation="border" variant="info" /> : <Button style={{margin:'3px 100px'}} onClick = {updateUser} variant="primary">
        Submit
      </Button>}
      
    </Form> : 
    <Card.Body>
        <Card.Title style={{color:'white', fontSize:'2rem'}}>{curUser.name}</Card.Title>
        <Card.Subtitle  style={{fontColor:'white', margin:'15px 80px 40px 0'}} className="mb-2 text-muted">Details</Card.Subtitle>
        <Card.Text style={{marginBottom:'25px', fontSize:'1.5rem'}}>
          {curUser.email}
        </Card.Text>
        <Card.Text style={{marginBottom:'25px', fontSize:'1.5rem'}}>
          Contact: {curUser.contact}
        </Card.Text>
        <Card.Text style={{marginBottom:'25px', fontSize:'1.5rem'}}>
          Address: {curUser.address}
        </Card.Text>
        <Button onClick={() => {setForm(true)}} style={{margin: '10px'}}>Update</Button>
        <Button onClick={delet}>Delete</Button>
      </Card.Body>}
    </Card>
  );
}

export default Car;