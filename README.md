# Full Stack User Registration - Backend 🧠

This repository contains the **backend** for a complete full-stack user registration application. It's a RESTful API built with **Node.js**, **Express**, and the modern **Prisma ORM**, connected to a **MongoDB** database.

This backend is designed to work with its corresponding **[React Frontend Application](https://github.com/AlbertFreitas/Cadastro-Usuario-React)**.

---

## ✨ Features

-   **Full CRUD Functionality:** Complete Create, Read, and Delete operations for users.
-   **Real-time Interaction:** The API is designed for seamless integration with a frontend client to provide real-time user updates.
-   **Efficient Database Queries:** Leverages Prisma ORM for safe, efficient, and easy-to-manage database operations against MongoDB.
-   **Ready for Integration:** Comes with CORS pre-configured, making it ready to be connected to any frontend client.

---

## 🛠️ Tech Stack

-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB
-   **ORM:** Prisma ORM
-   **Development:** Nodemon for development server auto-reloading

---

## 🧠 Architectural Decisions

The main goal of this project was to build a simple yet robust full-stack application to solidify knowledge in frontend and backend integration.

-   **Why Prisma?** I chose **Prisma ORM** for its excellent developer experience and type safety. Prisma's auto-generated client makes database queries intuitive and less error-prone compared to writing raw database queries, which significantly speeds up the development process. It also simplifies schema management for the MongoDB database.

-   **Why Express.js?** **Express** was used for its minimalist and flexible nature, allowing for the rapid creation of a structured and scalable RESTful API.

---

## 🚀 Getting Started

Follow the steps below to set up and run the API in your local environment.

### Prerequisites

-   Node.js (v18 or later)
-   Yarn or NPM
-   A running MongoDB instance (either local or a cloud service like MongoDB Atlas).

### ⚙️ Setup and Execution Steps

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/AlbertFreitas/Node-js-Cadastro-Usuario.git](https://github.com/AlbertFreitas/Node-js-Cadastro-Usuario.git)
    cd Node-js-Cadastro-Usuario
    ```

2.  **Install Dependencies**
    ```bash
    yarn install 
    # or
    # npm install
    ```

3.  **Configure Environment Variables**
    * Create a file named `.env` in the root of the project.
    * Add your MongoDB connection string to this file. This is a critical step for the database connection.
    ```env
    DATABASE_URL="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/yourDatabaseName?retryWrites=true&w=majority"
    ```

4.  **Generate the Prisma Client**
    * This command reads your `schema.prisma` file and generates the necessary client files for the ORM to function.
    ```bash
    npx prisma generate
    ```

5.  **Start the Development Server**
    ```bash
    yarn dev
    # or
    # npm run dev
    ```

🎉 **Done!** The server will now be running at `http://localhost:3000`.

---
## 📬 API Endpoints

| Method | Route          | Description              |
|--------|----------------|--------------------------|
| `GET`  | `/usuarios`    | Lists all users.         |
| `POST` | `/usuarios`    | Creates a new user.      |
| `DELETE`| `/usuarios/:id`| Deletes a user by their ID.|

---
## 🌐 Frontend Connection

This backend is specifically designed to integrate with its React frontend, which you can find here:
👉 **[User Registration - React Frontend](https://github.com/AlbertFreitas/Cadastro-Usuario-React)**
