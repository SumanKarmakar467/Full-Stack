// Importing express package
const express=require('express');
// Importing dotenv
const dotenv = require('dotenv');
// importing the routes workout.js file 
const workoutRoutes= require('./routes/workout');
// importing mongoose
const mongoose = require('mongoose');

dotenv.config();

// Express APP
const app = express();

// middleware
app.use(express.json())
app.use((req, res , next) => {
    console.log(req.path, req.method );
    next();
})

// Routes
app.get('/',(req, res) => {
    res.json({msg: 'Welcome to our application'});
})

app.use('/api/workouts/',workoutRoutes)
app.use('/admin',workoutRoutes)


// Connect to Database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log(`MongoDB Connect...`)
    })
    .catch((error) => {
        console.log((error))
    })

// PORT number (http://localhost:4000)
const PORT = process.env.PORT

// Listen for request
app.listen(PORT,() => {
    console.log(`Server is up on port : http://localhost:${PORT}`)
})


