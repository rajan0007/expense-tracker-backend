# Expense Tracker Backend

This is the backend for the Expense Tracker application, built with Node.js and Express.

## 📦 Scripts

* **Start the server**

```bash
npm start
```

This runs the server using Node.

* **Run in development mode**

```bash
npm run dev
```

This uses `nodemon` to automatically restart the server on file changes.

## 🚀 How to Run the Project

### 1. **Clone the Repository**

```bash
git clone https://github.com/rajan0007/expense-tracker-backend.git
cd expense-tracker-backend
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Create a `.env` File**

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. **Run the Server**

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

Make sure the frontend is configured to call this backend for API requests.

---

> ⚠️ Don't forget to set up MongoDB (local or cloud like MongoDB Atlas) and use the proper connection string in the `.env` file.
