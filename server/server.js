require('dotenv').config()
const express = require('express')
const db = require('./config/db')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// calling database 
db()

app.use('/api/tasks', require('./features/tasks/routes'));

const PORT = process.env.PORT;

app.listen(PORT, () => { console.log(`🚀 server is running on the port ${PORT}🚀`) })

app.use(require('./middlewares/errorHandler'));

