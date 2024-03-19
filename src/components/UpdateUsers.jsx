import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UpdateUsers(props) {

  // create navigate 
  const navigate = useNavigate();

  // props destructure
  const { user, setUser, selectedId,fetchUsers } = props;
  // local state variables
  const [editData, setEditData] = useState({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });
  const [loading, setLoading] = useState(true);

  // fetch user data for editing
  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${selectedId}`);
      console.log('response data ....', response.data);

      if (response.data) {
        setEditData(response.data);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  }

  // useeffect for calling the function when component mounts and updates
  useEffect(() => {
    fetchUser();
  }, [selectedId]);

  // loading data until it's fully loaded from the server
  if (loading) {
    return <div>Loading ...</div>;
  }

 // input handle function for onchange
 const handleInputChange = (e, ...fields) => {
  setEditData((prevData) => {

    console.log('Before update:', prevData);
    console.log('Fields:', fields);

    let updatedData = { ...prevData };

    fields.reduce((updatedData, field, index) => {
      if (index === fields.length - 1) {
        updatedData[field] = e.target.value;
      } else {
        if (!updatedData[field]) {
          // Initialize the nested field if it's undefined
          updatedData[field] = {};
        }
        return updatedData[field];
      }
      return updatedData;
    }, updatedData);

    console.log('After update:', updatedData);

    return { ...updatedData };
  });
};


  // submit handler to update user info in the database
  const handleSubmit = (e) => {

    e.preventDefault();

    // Perform your axios update logic here
    axios.put(`https://jsonplaceholder.typicode.com/users/${selectedId}`, editData)
      .then((res) => {

        console.log('update data......', res.data);
        alert("Update Successful!");

        navigate('/list');
    
    // update the state 
    fetchUsers();

      }).catch((error) => {
        console.log('Error in update ...',error);
      })
   
  };

  return (
    <div>
      {/* create a form for edit user */}
      <h3>Edit User: </h3>
      <form onSubmit={handleSubmit}>

        <label htmlFor='name'>Name : </label>
        <input type='text' value={editData.name} onChange={(e) => handleInputChange(e, 'name')} name='name' id='name' />

        <br />

        <label htmlFor='userName'>UserName : </label>
        <input type='text' value={editData.username} onChange={(e) => handleInputChange(e, 'username')} name='userName' id='userName' />

        <br />

        <label htmlFor='email'>Email : </label>
        <input type="text" value={editData.email} onChange={(e) => handleInputChange(e, 'email')} name='email' id='email' />

        <br />

        <label htmlFor='address'>Address : </label>
        <br/>
        <input type='text' value={editData.address.street} onChange={(e) => handleInputChange(e,'address', 'street')} name='street' id='street' placeholder='street' />
        <input type='text' value={editData.address.suite} onChange={(e) => handleInputChange(e,'address', 'suite')} name='suite' id='suite' placeholder='suite' />
        <input type='text' value={editData.address.city} onChange={(e) => handleInputChange(e,'address', 'city')} name='city' id='city' placeholder='city' />
        <input type='text' value={editData.address.zipcode} onChange={(e) => handleInputChange(e,'address', 'zipcode')}  name='zipcode' id='zipcode' placeholder='zipcode'/>
        <input type='text' value={editData.address.geo.lat} onChange={(e) => handleInputChange(e,'address', 'geo','lat')}  name='geo-lat' id='geo-lat' placeholder='Latitude' />
        <input type='text' value={editData.address.geo.lng} onChange={(e) => handleInputChange(e,'address', 'geo','lng')}  name='geo-lng' id='geo-lng' placeholder='longitude' />

        <br />

        <label htmlFor='phone'>Phone : </label>
        <input type='text' value={editData.phone} onChange={(e) => handleInputChange(e, 'phone')}  name='phone' id='phone'  />

        <br />

        <label htmlFor='website'>Website : </label>
        <input type='text' value={editData.website} onChange={(e) => handleInputChange(e, 'website')} name='website' id='website' />

        <br />

        <label htmlFor='company'>Company : </label>
        <input type='text' value={editData.company.name} onChange={(e) => handleInputChange(e,'company', 'name')} name='companyName' id='companyName' placeholder='Company Name' />
        <input type='text' value={editData.company.catchPhrase} onChange={(e) => handleInputChange(e,'company', 'catchPhrase')} name='catchPhrase' id='catchPhrase' placeholder='Catch Phrase' />
        <input type='text' value={editData.company.bs} onChange={(e) => handleInputChange(e,'company','businessStrategy')} name='businessStrategy' id='businessStrategy' placeholder='Business Strategy' />

        <br />

        <button type='submit'>Update User</button>
      </form>
    </div>
  );
}

export default UpdateUsers;
