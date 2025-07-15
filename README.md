
# Zerodha Clone - Full Stack Trading App 🧑‍💻📈

This is a **full-stack Zerodha Clone project** built for educational purposes 🎓. It replicates the **UI/UX and basic functionalities** of [Zerodha](https://zerodha.com), India’s leading stock trading platform.

Built using the **MERN stack** (MongoDB, Express, React, Node.js), this clone offers:

- 🔐 Secure JWT-based authentication  
- 🧾 Clean and modular code structure  
- 🎯 Fully responsive frontend mimicking Zerodha’s landing page  

---

## 🛥️ Bonus: Zerodha Kite Replica

> 🚀 Along with the landing page, this project also includes a **replica of Zerodha’s trading platform – Kite**.  
> ✨ It mirrors the UI and user flow of the **Kite dashboard**, providing a hands-on simulation of how real-world trading dashboards operate.

- 📊 Portfolio & holdings mock-up
- 💼 Order book UI layout
- 🕹️ Market watch section (dummy data)
- 🔐 JWT-protected access to Kite dashboard
- ⚙️ Fully responsive & React-powered

---

## 🚀 Features

### ✨ User Authentication

- 🔐 **JWT Authentication** for secure login and protected routes  
- 🔑 Passwords securely hashed using `bcryptjs`  
- 📦 Tokens stored in `localStorage`  

### 💡 Frontend – React

- 🎨 **Responsive UI** replicating Zerodha's design  
- 📄 Pages:
  - 🏠 **Home / Landing**
  - 📝 **Register / Login**
  - 📊 **Dashboard / Profile (Kite UI)** (Protected Route)  
- 🔄 **Axios** for API requests  
- 📦 State management with React Hooks  
- 🧠 Conditional rendering based on auth state  

### ⚙️ Backend – Node.js + Express

- 🛠️ **Express.js** REST API server  
- 📦 Middleware for **JWT token verification**  
- 🔏 **bcryptjs** for password hashing  
- 📁 **dotenv** for managing environment variables  
- 🚀 **Nodemon** for hot reloading in development  

### 🗄️ Database – MongoDB

- 🧱 **MongoDB** used for storing user credentials and data  
- 🌐 Can be hosted on **MongoDB Atlas** or run locally  
- 🧬 **Mongoose** for modeling and validation  

---


## 🛠️ Tech Stack

| Layer     | Technology             |
|-----------|------------------------|
| Frontend  | React, Axios, Bootstrap|
| Backend   | Node.js, Express       |
| Database  | MongoDB, Mongoose      |
| Auth      | JWT, bcryptjs          |

---

