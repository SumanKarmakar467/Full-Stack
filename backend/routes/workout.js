// importing express
const express = require('express')
const Workout = require('../models/workoutModel');
const router = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');
/**
 * Route: /admin
 * Method: GET
 * Description: GET the admin panel
 * Access: Public 
 * Parameters: None
 */
router.get('/admin',(req, res) => {
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
router.get('/',getWorkouts)


/**
 * Route: /api/workouts/:id
 * Method: GET
 * Description: Get a single workout by it's ID
 * Access: Public 
 * Parameters: id
 */
router.get('/:id',getWorkout)



/**
 * Route: /api/workouts
 * Method: POST
 * Description: Create/Add a new workout 
 * Access: Public 
 * Parameters: None
 */
router.post('/',createWorkout)



/**
 * Route: /api/workouts/:id
 * Method: DELETE
 * Description: Delete a workout by it's ID
 * Access: Public 
 * Parameters: id
 */
router.delete('/:id',deleteWorkout)


/**
 * Route: /api/workouts/:id
 * Method: PATCH
 * Description: Update a workout by it's ID 
 * Access: Public 
 * Parameters: id
 */
router.patch('/:id',updateWorkout)


module.exports = router;