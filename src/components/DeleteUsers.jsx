import React,{useState} from 'react';
import DeleteForm from './DeleteForm';

function DeleteUsers(props) {

    const {users,setUser,fetchUsers} = props;

    const[selectedId,setSelectedId] = useState('Select the userID to delete...');

    const selectIdHandler = (event) => {
        console.log(event);
        setSelectedId(event.target.value);
    };

  return (

    <div>
        <h1>Delete Users</h1>

        <p>Delete user by  id  : &nbsp;

<select value={selectedId} onChange={selectIdHandler}>
    <option>Select the userID to delete...</option>
        {
            users.map( user => 
                <option key={user.id} >{user.id}</option>
            )
        }
    
</select>

</p>

<div>
    {
        selectedId !== "Select the userID to delete..." &&  <DeleteForm
            users = {users} 
            selectedId= {selectedId}
            setUser = {setUser} fetchUsers = {fetchUsers}
        />
    }
</div>

    </div>
  )
}

export default DeleteUsers