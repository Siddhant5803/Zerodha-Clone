# Zerodha-Clone
This is a full-stack Zerodha Clone project developed for educational purposes. It replicates the basic functionalities and UI/UX of Zerodha, India’s leading stock trading platform. The project is built with MERN stack (MongoDB, Express, React, Node.js). It mimics the look and feel of Zerodha’s trading platform and includes secure user authentication with JWT (JSON Web Tokens).

## Features:
- User Registration & Login (with JWT Authentication)
- Secure backend API with Express.js and MongoDB
- Frontend UI replicating Zerodha’s landing page
- API protection with middleware and token verification
- Modular project structure

# Key Features
## Frontend (React)
- Fully responsive, component-based UI built with React.js
- Pages for:
    - Home / Landing Page
    - Register / Login
    - Dashboard / Profile (protected by JWT)
- Uses Axios to interact with backend REST APIs
- Authentication token (JWT) stored in localStorage
- Conditional rendering based on auth state
- Clean state management using React Hooks

##Backend (Node.js & Express)
- Node.js – JavaScript runtime environment
- Express.js – Web framework for building REST APIs
- Mongoose – ODM for MongoDB
- JWT (jsonwebtoken) – Secure token-based authentication
- dotenv – Environment variable management
- bcryptjs – Password hashing for secure authentication
- Nodemon – Dev tool for auto-restarting the server
