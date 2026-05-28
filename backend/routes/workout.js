// importing express
const express = require('express')
const Workout = require('../models/workoutModel');
const router = express.Router();

/**
 * Route: /admin
 * Method: GET
 * Description: GET the admin panel
 * Access: Public 
 * Parameters: None
 */
router.get('/',(req, res) => {
    res.json({
        msg: 'GET the admin panel'
    })
})


/**
 * Route: /api/workouts
 * Method: GET
 * Description: Get all workouts
 * Access: Public 
 * Parameters: None
 */
router.get('/',(req, res) => {
    res.json({
        msg: 'GET all workouts'
    })
})


/**
 * Route: /api/workouts/:id
 * Method: GET
 * Description: Get a single workout by it's ID
 * Access: Public 
 * Parameters: id
 */
router.get('/:id',(req, res) => {
    res.json({
        msg: 'GET a single workout by its ID'
    })
})



/**
 * Route: /api/workouts
 * Method: POST
 * Description: Create/Add a new workout 
 * Access: Public 
 * Parameters: None
 */
router.post('/',async(req, res) => {
    const {title, load, reps} = req.body;
    try{
        const workout = await Workout.create( {title, load, reps} )
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
})



/**
 * Route: /api/workouts/:id
 * Method: DELETE
 * Description: Delete a workout by it's ID
 * Access: Public 
 * Parameters: id
 */
router.delete('/:id',(req, res) => {
    res.json({
        msg: 'Delete a workout'
    })
})


/**
 * Route: /api/workouts/:id
 * Method: PATCH
 * Description: Update a workout by it's ID 
 * Access: Public 
 * Parameters: id
 */
router.patch('/:id',(req, res) => {
    res.json({
        msg: 'Patch a workout'
    })
})
module.exports = router;