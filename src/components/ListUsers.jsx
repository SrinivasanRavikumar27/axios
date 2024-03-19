import React from 'react'

function ListUsers(props) {

    const user = props.users;

  return (
    <div>

<h1>Users</h1>

        <ul>
{/* using map function to loop through the array of users and display them */}
  {
    user.map((user) =>
      <li key={user.id}>{user.name}</li>)
  }
</ul>
    </div>
  )
}

export default ListUsers