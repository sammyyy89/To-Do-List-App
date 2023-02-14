const express = require('express') // backend web application framework for building RESTful APIs with Node.js
const cors = require('cors') // used to tackle CORS (cross-origin resource sharing) errors 
const mongoose = require('mongoose') // Node package that makes working with MongoDB easier

const routes = require('./routes/ToDoRoute')

// dotenv => package to keep sensitve data (e.g. passwords, API keys, etc.) out of my code.
// Allows me to create environment variables in a .env file.
require('dotenv').config()

const app = express()
const PORT = process.env.port || 3001

app.use(express.json()) // parses incoming JSON requests
app.use(cors()) // stops any CORS-related errors I get (when I try to access my api from a different domain)

// connect to MongoDB
mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected to MongoDB`))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
