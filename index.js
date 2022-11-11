const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbconnect = require('./dbconnect');
const jobRoute = require('./routes/job.route');
const hiringManagerRoute = require('./routes/hiringManager.route');
const candidateRoute = require('./routes/candidate.route');
const userRoute = require('./routes/users.route');
const applyRoute = require('./routes/apply.route');
const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

dbconnect();

app.get('/', (req, res) => {
    res.send("Job Portal Management API")
})

app.use('/api/v1', jobRoute)
app.use('/api/v1', hiringManagerRoute)
app.use('/api/v1', candidateRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1', applyRoute)

app.listen(port, () => {
    console.log(`App is running on port ${port}`.white.bold);
})
