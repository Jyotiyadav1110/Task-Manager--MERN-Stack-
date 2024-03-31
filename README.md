Task Manager - MERN Stack
Task Manager is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to manage their tasks effectively, including adding, updating, deleting, and marking tasks as done.

Features
Add Task: Users can add new tasks with a title and optional description.
Update Task: Tasks can be updated to modify their title or description.
Delete Task: Users can delete tasks they no longer need.
Mark as Done: Tasks can be marked as done or undone with a toggle functionality.
List All Tasks: Users can view all tasks sorted by timestamp, showing the most recent tasks first.
Installation
To run this application locally, follow these steps:

Clone the repository:


bash
Copy code
git clone [https://github.com/yadavjyoti4311/Task-Manager--MERN-Stack-.git](https://github.com/Jyotiyadav1110/Task-Manager--MERN-Stack-.git)
Navigate to the server directory and install dependencies:

bash
Copy code
cd Task-Manager--MERN-Stack-/server
npm install
Create a .env file in the server directory and add your MongoDB connection string and other environment variables:

makefile
Copy code
DB_USERNAME=your_mongodb_username
DB_PASSWORD=your_mongodb_password
Start the server:

sql
Copy code
npm start
Similarly, navigate to the client directory and install dependencies:

bash
Copy code
cd ../client
npm install
Start the React development server:

sql
Copy code
npm start
Open your browser and visit http://localhost:3000 to view the application.

Technologies Used
Frontend:

React.js
HTML
CSS
Bootstrap
Backend:

Node.js
Express.js
MongoDB (via Mongoose)
Folder Structure
client: Contains the frontend React application.
server: Contains the backend Node.js server.
database: Contains database-related files.
controllers: Contains route handlers/controllers.
models: Contains Mongoose models.
routes: Contains API routes.
index.js: Entry point of the server.
Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues for bug fixes, features, or enhancements.

License
This project is licensed under the MIT License.
