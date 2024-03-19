import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function DeleteForm(props) {

    const {users,setUser,selectedId,fetchUsers} = props;

    const navigate = useNavigate();

    let selectedUser = users.find(user => user.id == selectedId);
    // console.log(selectedUser);

    const deleteUsers = () =>{

        console.log('deleting the user .. ');

        try {
            
            axios.delete(`https://jsonplaceholder.typicode.com/users/${selectedId}`);
            console.log('user deleted sucessfully');

            // update state 
            fetchUsers();

            navigate('/list');

        } catch (error) {
            console.log('error in delete .. ',error);
        }

    };


  return (
    <div>

<hr></hr>

    <br></br>

        <h2 className="text-center">Delete a User</h2>

<label>
    <p><strong>ID : </strong> {selectedUser.id}</p>
    <p><strong>UserName : </strong>{selectedUser.username} </p>
</label>

<br></br>

<button onClick={deleteUsers} >Delete User</button>

    </div>
  )
}

export default DeleteForm