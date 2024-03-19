
# React CRUD App

This is a simple React application that allows for CRUD operations with user data using React and Axios to interact with a mock API.

## Requirements

- Node.js and npm installed
- Internet connection to fetch data from the mock API

1. Clone or download this repository onto your local machine.
2. Navigate into the project directory `cd react-crud-app`.
3. Install dependencies by running `npm install` in your terminal. This will install all necessary packages listed in the `package.json` file.
4. Install axios,react-router-dom and json-server .

## Features

Display all existing API data in UI using Axios.
Perform CRUD operations on user data, including adding, editing, and deleting user records.
Data is stored in a mock API that can be accessed using Axios fetch

## Project Structure

|-- src
|   |-- components
|   |   |-- UserList.js
|   |   |-- UserForm.js
|   |-- App.js
|   |-- index.js
|-- public
|-- package.json
|-- README.md
|-- .gitignore

## Usage

The application consists of a User List and a User Form.
Users can be added, edited, and deleted using the form and buttons in the list.