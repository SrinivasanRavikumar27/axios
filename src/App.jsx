import { React,useState,useEffect } from 'react';
import '../src/App.css';
import {Link,BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import axios from 'axios';
import ListUsers from '../src/components/ListUsers';
import AddUsers from '../src/components/AddUsers';
import Dashboard from '../src/components/Dashboard';
import EditUsers from '../src/components/EditUsers';
import DeleteUsers from '../src/components/DeleteUsers';

function App() {

   // user state
   const [user,setUser] = useState([]);

   // fetch user
   const fetchUsers = async () => {
 
     try {
       
       console.log('Getting a users from db')
       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
       console.log(response);
       setUser(response.data);
 
     } catch (error) {
       console.log('failed to fetch users : ',error)
     }
 
   };
 
   // to render each time changes on db are made
   useEffect(() => {
     fetchUsers();
   },[]);

  

  const padding = {
    padding : 15,
  }

  return (

<Router>

<div>

<Link  to="/" style={padding} >Dashboard</Link>
<Link to='/list' style={padding} >ListUsers</Link>
<Link to='/add' style={padding} >AddUsers</Link>
<Link to='/edit' style={padding}>EditUsers</Link>
<Link to='/delete' state={padding}>DeleteUsers</Link>

</div>

<Routes>

  <Route path="/" element={<Dashboard />} />
  <Route path='/list' element={<ListUsers users = {user} />}/>
  <Route path='/add' element={<AddUsers users = {user} />}/>
  <Route path='/edit' element={<EditUsers users = {user} setUser = {setUser} fetchUsers = {fetchUsers}/>}/>
  <Route path='/delete' element={<DeleteUsers users = {user} setUser = {setUser} fetchUsers = {fetchUsers} />}/>

</Routes>

</Router>
  )
}

export default App