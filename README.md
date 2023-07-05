# Simple Sales Record Management Web App

This is a simple web application that allows users to add, delete, and edit sales records in real-time. The app is built using TypeScript, Node.js, Express, MySQL, Sequelize, and Socket.IO for real-time data updating.

## Features

- Add new sales records with relevant details such as product name, quantity, and price.
- Delete existing sales records to remove them from the system.
- Edit existing sales records to update information.
- Real-time data updating: Changes made by one user are automatically emitted to other connected clients using Socket.IO, ensuring that all clients have the most up-to-date information.

## Stack

### Backend

- Node.js: A JavaScript runtime environment that allows running JavaScript code on the server.
- Express: A fast and minimalist web application framework for Node.js.
- MySQL: A popular open-source relational database management system.
- Sequelize: A powerful and easy-to-use Object-Relational Mapping (ORM) library for Node.js and MySQL, providing a straightforward way to interact with the database.

### Frontend

- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript. It adds static typing and other features to improve developer productivity and code quality.
- Vite: A fast build tool for modern web applications that provides an efficient development environment with instant server startup and fast hot module replacement (HMR).
- Redux Toolkit Query: A data fetching and caching library for Redux that simplifies API interactions and state management.
- Redux Toolkit: The official, opinionated toolset for efficient Redux development, which includes utilities for simplified state management and improved developer experience.
- Socket.IO client: A JavaScript library for real-time bidirectional communication between the client and the server using WebSocket protocol. It enables real-time updates and synchronization across connected clients.

## Installation

To run the application locally, follow these steps:

1. Clone the repository.
2. Install the required dependencies by running `npm install` in both the backend and frontend directories.
3. Set up your MySQL database and configure the connection in the backend's configuration files. More details down below.
4. Build the frontend assets by running `npm run dev` in the frontend directory.
5. Start the backend server by running `npm start` or `yarn start` in the backend directory.
6. Access the application in your browser at `http://localhost:5173`.

## Usage

Once the application is running, you can perform the following actions:

- Add a new sales record by filling out the necessary details and submitting the form.
- Edit an existing sales record by selecting the record and updating its information.
- Delete a sales record by selecting the record and confirming the deletion.

All changes made to the sales records will be reflected in real-time across all connected clients, thanks to the Socket.IO integration.

## Database Details
DB name: developer_challenge
DB password: marve007
Host: localhost
