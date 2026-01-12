🛠️ CRUD-Craft – MERN Task Manager

  CRUD-Craft is a simple Task Management CRUD application built using the MERN stack.
  It allows users to create, read, update, and delete tasks with a clean and minimal UI.


🚀 Features

   ✅ Create a new task

   📄 View all tasks

   ✏️ Edit an existing task

   🗑️ Delete a task

   🔄 Real-time UI updates after CRUD actions

   🎯 Centralized layout with clean styling



🧱 Tech Stack

 Frontend

   • React (Vite)

   • Axios

   • CSS (custom styling)

 Backend

  • Node.js

  • Express.js

  • MongoDB

  • Mongoose


 💾 project structure

 client/
 └── src/
     ├── api/
     │    └── axios.js
     ├── features/
     │    └── tasks/
     │         ├── pages/
     │         │    ├── TaskList.jsx
     │         │    └── CreateTask.jsx
     │         └── services/
     │              └── taskApi.js
     ├── App.jsx
     └── main.jsx

server/
 ├── models/
 ├── routes/
 ├── controllers/
 └── server.js


⚙️ Installation & Setup

 1️⃣ Clone the repository
     git clone https://github.com/Anand905536/crud-craft.git
     cd CRUD

 2️⃣ Backend Setup
     cd server
     npm install
     npm run dev

📌 Make sure MongoDB is running locally or your connection string is set.


 3️⃣ Frontend Setup
     cd client
     npm install
     npm run dev

     Frontend will run on:
     http://localhost:5173

     Backend runs on:
     http://localhost:5000
     
     

🔗 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get all tasks |
| POST   | /api/tasks     | Create a task |
| PUT    | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |



🧠 Key Concepts Used

   • React Hooks (useState, useEffect)

   • Controlled form components

   • Conditional logic for Create vs Edit

   • Lifting state up (selectedTask)

   • REST API integration with Axios


  👤 Author

  Built by Anand
  Full-Stack / MERN Developer 🚀





