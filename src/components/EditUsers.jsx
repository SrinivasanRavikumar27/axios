import React, { useState } from 'react'
import UpdateUsers from './UpdateUsers';

function EditUsers(props) {

    const {users,setUser,fetchUsers} = props;

    console.log('Edit page ...',users);

    const[selectedId,setSelectedId] = useState('Select the userID to edit...');

    const selectIdHandler = (event) => {
        console.log(event);
        setSelectedId(event.target.value);
    };

  return (
    <div>

<h1>EditUsers</h1>

<p>Edit user by  id  : &nbsp;

<select value={selectedId} onChange={selectIdHandler}>
    <option>Select the userID to edit...</option>
        {
            users.map( user => 
                <option key={user.id} >{user.id}</option>
            )
        }
    
</select>

</p>

<div>
   {
    selectedId !==  "Select the userID to edit..." && <UpdateUsers
        selectedId = {selectedId} user = {users} setUser = {setUser} fetchUsers = {fetchUsers}
    />
   }
</div>

    </div>
  )
}

export default EditUsers