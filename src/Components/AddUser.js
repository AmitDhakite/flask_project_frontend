import React, {useState, useEffect} from 'react'
import axios from '../axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const AddUser = (props) => {

    const emptyUser = {
      name: '',
      contact: '',
      email: '',
      address:''
  };
    const [newUser, setNewUser] = useState(emptyUser);
    const [loading, setLoading] = useState(false);

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setNewUser((u) => {
            return {
                ...u, 
                [name]: value
            }
        });
    };

    const submitHandler = async () => {
      try{
          setLoading(true);
          const res = await axios.post("/addUser", newUser);
          props.setUpdate(p => p+1);
          setNewUser(emptyUser);
          props.userAdded()
          console.log(res.data);
      } catch(e) {
        console.log(e);
      }
    }

    return (
        <>
    <Form style={{width:'30rem', margin: '30px 400px', borderRadius: '8px', padding: '50px', backgroundImage: 'linear-gradient(#FD6585, #0D25B9)'}}>
      <h3 style={{color:'purple'}}>Add user</h3>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Name</Form.Label>
        <Form.Control value={newUser.name} name="name" onChange={changeHandler} type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={newUser.email} name="email" onChange={changeHandler} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control value={newUser.contact} name="contact" onChange={changeHandler} type="text" placeholder="Enter Contact Number" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control value={newUser.address} name="address" onChange={changeHandler} type="text" placeholder="Enter address" />
      </Form.Group>
      {loading ? <Spinner animation="border" variant="info" /> : <Button variant="primary" onClick={submitHandler}>
        Submit
      </Button>}
    </Form>
        </>
    );
}

export default AddUser;