# 🚀 Student Management API (CRUD)

A simple REST API built using **Node.js, Express, and MongoDB** to perform CRUD operations on student data.

---

## 📌 Features

* Create a student
* Read all students
* Read single student
* Update student details
* Delete student

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📁 Project Structure

```
project/
│── models/
│   └── Student.js
│── routes/
│   └── studentRoutes.js
│── server.js
│── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/student-crud-api.git
cd student-crud-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally:

```
mongodb://127.0.0.1:27017
```

### 4️⃣ Run the server

```bash
npx nodemon server.js
```

Server runs on:

```
http://localhost:5000
```

---

## 🧪 API Endpoints

### ➕ Create Student

POST /api/students

### 📖 Get All Students

GET /api/students

### 🔍 Get Single Student

GET /api/students/:id

### ✏️ Update Student

PUT /api/students/:id

### ❌ Delete Student

DELETE /api/students/:id

---

## 📦 Example Request Body

```json
{
  "name": "John",
  "age": 21,
  "course": "CSE"
}
```

---

## ⚠️ Environment Variables (Optional)

Create a `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/studentDB
```

---

## 💡 Future Improvements

* Add authentication (JWT)
* Add frontend (React)
* Add validation
* Add pagination & search
* Deploy on cloud (Render / Railway)

---

## 🤝 Contributing

Feel free to fork this repo and contribute!

---

## 📜 License

This project is open-source and free to use.
