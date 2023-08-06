# CHATMe

A Realtime chat application built with React, Node.js, Socket.io and MongoDB

The application consists of two folders:-

public -> which holds the frontend files and folders

server -> which holds the backend api and services

## Run the application in development mode

First of all you must have mongodb installed.
Then to create the mongodb server, run the command:

### `mongosh`

Open another tab in terminal and head to /server folder.
To start the backend server, run the command:

### `npm run start`

This will start the server and listen by default on port `5000`.
And connect to your mongodb server datadase.

Then in another tab you must head to /public folder.
To start the frontend development server, run the command:

### `npm run start`

This will run the frontend in development mode.

Now open [http://localhost:3000](http://localhost:3000) to view it in your browser.
