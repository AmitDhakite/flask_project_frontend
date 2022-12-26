import React, {useState, useEffect} from 'react'
import Card from './Card'
import axios from '../axios'


const Users = (props) => {

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        try {
            async function getUsers() {
                const res = await axios.get("/getUsers");
                console.log(res.data);
                setUsersList(res.data)
            }
            getUsers()
        } catch (e) {
          console.log(e);
        }       
      }, [props.update]);

      const deleteUser = async (id) => {    
      try {
            const res = await axios.delete("/deleteUser/" + id);
            setUsersList((p) => {
                var updatedUsers = [];
                p.forEach(user => {
                    if(user.id != id)
                        updatedUsers.push(user)
                });
                return updatedUsers
            })
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {usersList?.map(e => 
            <Card
                deleteUser={deleteUser}
                id={e.id}
                name={e.name}
                contact={e.contact}
                address={e.address}
                email={e.email}/>)}
        </>
    );
}

export default Users;