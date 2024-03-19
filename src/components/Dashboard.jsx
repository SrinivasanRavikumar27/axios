import React from 'react';
import '../src/styles/dashBoard.css'

function Dashboard() {
  return (
    <div>
        <h1>Users Application</h1>

<p>Welcome to the users application. Here you can view and manage user accounts by api endpoints.</p>

<table>

<thead>
  <th>Api EndPoint</th>
  <th>Request Type</th>
  <th>Description</th>
</thead>

<tbody>

  <tr>
    <td>/users</td>
    <td>GET</td>
    <td>to get all user details from resource.</td>
  </tr>

<tr>
  <td>/users/id</td>
  <td>GET</td>
  <td>to get particular user details using id as a parameter in url.</td>
</tr>

<tr>
  <td>/users</td>
  <td>POST</td>
  <td>to create new user details.</td>
</tr>

<tr>
  <td>/users/id</td>
  <td>PUT / PATCH</td>
  <td>To update existing user details, send data with id in request body and hit on this endpoint with id in url.</td>
</tr>

<tr>
  <td>/users/id</td>
  <td>DELETE</td>
  <td>to delete user details by id parameter.</td>
</tr>

</tbody>

</table>

    </div>
  )
}

export default Dashboard