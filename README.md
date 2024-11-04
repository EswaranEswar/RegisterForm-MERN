# Form Validation Project
This project demonstrates a full-stack application for user registration with form validation. It is built using React for the front-end, Express for the back-end, Node.js as the runtime environment, and MongoDB for the database.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Form Validation](#form-validation)

## Features

- User registration with form validation
- Input validation for name, email, and password
- Error handling for duplicate users and invalid inputs
- Responsive design with a clean user interface

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **Express**: Web framework for Node.js to create RESTful APIs.
- **Node.js**: JavaScript runtime for server-side execution.
- **MongoDB**: NoSQL database to store user data.
- **Mongoose**: ODM for MongoDB and Node.js.
- **Material-UI**: Component library for styling and UI elements.

- **Frontend**: 
  - React
  - Material-UI (or custom CSS for styling)

- **Backend**: 
  - Node.js
  - Express
  - MongoDB (with Mongoose)

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

## 1.Clone the Repository

```bash
git clone https://github.com/EswaranEswar/RegisterForm-MERN
cd RegisterForm-MERN

## 2.Install dependencies for the client

cd client
npm install

## 3.Install dependencies for the server:

cd server
npm install

## Usage

## 1.Server side:
cd server
node index.js

## 2.Start the client in a new terminal:
cd client
npm start

## API Endpoints:

1.POST /register: Registers a new user. Expects a JSON body with name, email, and password.
2.GET /users: Retrieves a list of registered users.

# Form-Validation
1.Each field in the registration form is validated on the client side.
2.Rules include: name is required, email must be valid, password must be at least 8 characters long.
3.Error messages are displayed in real-time as users type.