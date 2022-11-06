const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbconnect = require('./dbconnect');
const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

dbconnect();

app.get('/', (req, res) => {
    res.send("Job Portal Management API")
})



app.listen(port, () => {
    console.log(`App is running on port ${port}`.white.bold);
})
