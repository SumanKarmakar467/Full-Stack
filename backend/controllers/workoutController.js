const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');



// Get all workouts
exports.getWorkouts= async(req, res) => {

    const user_id= req.user._id

    const workouts = await Workout.find({user_id}).sort({createdAt: -1})

    if(!workouts){
        return res.status(400).json({error: "No entries found"})
    }
    res.status(200).json(workouts)
}


// Get a single workout by it's ID
exports.getWorkout= async(req, res) => {
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }
    // const workout = await Workout.find({_id:id})
    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({error: "No such workout"})
    }
    else{
        return res.status(200).json(workout)
    }
}

// Create a new workout
exports.createWorkout = async(req, res) => {

    const {title, load, reps} = req.body;

    let emptyFields =[];
    if(!title){
        emptyFields.push('title')
    }
    else if(!load){
        emptyFields.push('load')
    }
    else if(!reps){
        emptyFields.push('reps')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill out all fields!',emptyFields})
    }

    // add doc to DataBase
    try{
        const user_id = req.ser_id
        const workout = await Workout.create( {title, load, reps, user_id} )
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// Delete a workout by it's ID
exports.deleteWorkout = async(req, res) => {
    const {id} =req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workouts"})
    }
    const workout = await Workout.findOneAndDelete({_id:id});
    if(!workout){
        return res.status(400).json({error: "No such workout to delete"})
    }
    res.status(200).json(workout)
}

// Update a workout by it's ID 
exports.updateWorkout = async(req, res) => {
    const{id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workouts"})
    }
    const workout =  await Workout.findOneAndUpdate(
        {
            _id:id}
        ,
        {
            ...req.body
        },
        {
          new : true  
        }
    )
    if(!workout){
        return res.status(400).json({error: "No such workouts"})
    }
    res.status(200).json(workout)

}
