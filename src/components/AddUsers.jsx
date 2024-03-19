import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/addUsers.css";

function AddUsers(users) {
  // create navigate
  const navigate = useNavigate();

  // add function
  const addUser = (event) => {
    event.preventDefault();

    // create new user object
    let userObject = {
      id: users.length + 1,
      name: document.getElementById("name").value,
      username: document.getElementById("userName").value,
      email: document.getElementById("email").value,
      address: {
        street: document.getElementById("street").value,
        suite: document.getElementById("suite").value,
        city: document.getElementById("city").value,
        zipcode: document.getElementById("zipcode").value,
        geo: {
          lat: document.getElementById("geo-lat").value,
          lng: document.getElementById("geo-lng").value,
        },
      },
      phone: document.getElementById("phone").value,
      website: document.getElementById("website").value,
      company: {
        companyName: document.getElementById("companyName").value,
        catchPhrase: document.getElementById("catchPhrase").value,
        bs: document.getElementById("businessStrategy").value,
      },
    };

    // console.log(userObject);

    // add user by new object each time
    // setUser(user.concat(userObject));

    // http://localhost:3001/user  this for local json server test in local machine db.json file

    // https://jsonplaceholder.typicode.com/users

    // mock api created using above api data in mockApi.io
    // https://65bc7ef8b51f9b29e931a03e.mockapi.io/api/users

    // add user by axios api  call to server
    axios
      .post("https://jsonplaceholder.typicode.com/users", userObject)
      .then((response) => {
        console.log("Added new User . ..", response.data);
        console.log(users);

        alert("User Created sucessfully .. ");

        navigate("/list");
      })
      .catch((error) => {
        console.error("Failed to add user:", error);
      });

    // to clear values of all feilds after adding a user
    document.getElementById("name").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("street").value = "";
    document.getElementById("suite").value = "";
    document.getElementById("city").value = "";
    document.getElementById("zipcode").value = "";
    document.getElementById("geo-lat").value = "";
    document.getElementById("geo-lng").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("website").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("catchPhrase").value = "";
    document.getElementById("businessStrategy").value = "";
  };

  return (
    <div>
      {/* create a form for adding new user */}
      <h3>Add New User: </h3>

      <form onSubmit={addUser}>
        <div className="row">
          <div className="col-3">
            <label htmlFor="name">Name : &nbsp;</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="col-4">
            <label htmlFor="userName">UserName : &nbsp;</label>
            <input type="text" name="userName" id="userName" />
          </div>

          <div className="col-3">
            <label htmlFor="email">Email : &nbsp;</label>
            <input type="text" name="email" id="email" />
          </div>
        </div>

        <div className="address">
          <label htmlFor="address">Address : </label>

          <hr></hr>

          <div className="row">
            <div className="col-3">
              <label htmlFor="Street">Street : &nbsp;</label>
              <input
                type="text"
                name="street"
                id="street"
                placeholder="street"
              />
            </div>

            <div className="col-3">
              <label htmlFor="Suite">Suite : &nbsp;</label>
              <input type="text" name="suite" id="suite" placeholder="suite" />
            </div>

            <div className="col-3">
              <label htmlFor="City">City : &nbsp;</label>
              <input type="text" name="city" id="city" placeholder="city" />
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <label htmlFor="ZipCode">ZipCode : &nbsp;</label>
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                placeholder="zipcode"
              />
            </div>

            <div className="col-6" style={{ marginLeft: "-70px" }}>
              <label htmlFor="GeoLocation">GeoLocation : &nbsp;</label>
              <input
                type="text"
                name="geo-lat"
                id="geo-lat"
                placeholder="Latitude"
              />{" "}
              &nbsp; &nbsp;
              <input
                type="text"
                name="geo-lng"
                id="geo-lng"
                placeholder="longitude"
              />
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-3">
            <label htmlFor="phone">Phone : &nbsp;</label>
            <input type="text" name="phone" id="phone" />
          </div>

          <div className="col-7">
            <label htmlFor="website">Website : &nbsp;</label>
            <input type="text" name="website" id="website" />
          </div>
        </div>

        <br />

        <label htmlFor="company">Company : </label>

        <br></br>

        <div className="row">
          <div className="col-3">
            <label htmlFor="company">Company : &nbsp;</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Company Name"
            />
          </div>

          <div className="col-3">
            <label htmlFor="company">Company : &nbsp;</label>
            <input
              type="text"
              name="catchPhrase"
              id="catchPhrase"
              placeholder="Catch Phrase"
            />
          </div>

          <div className="col-3">
            <label htmlFor="company">Company : &nbsp;</label>
            <input
              type="text"
              name="businessStrategy"
              id="businessStrategy"
              placeholder="Business Strategy"
            />
          </div>
        </div>

        <br />

        <button type="sumbit">Create User</button>
      </form>
    </div>
  );
}

export default AddUsers;
