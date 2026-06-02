// import React, {useEffect, useState} from 'react'
import React, {useEffect} from 'react'


// Import Component
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext'


const Home = () => {

  // useState
  // const[workouts, setWorkout] = useState(null)

  const {workouts, dispatch} = useWorkoutsContext()
  const {user} =useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async() => {
      const response = await fetch(`/api/workouts/`, {
        headers : {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json=await response.json()

      if(response.ok){
        // useState
        // setWorkout(json)

        dispatch({type: 'SET_WORKOUTS', payload:json})
      }
    }

    if(user){
      fetchWorkouts()
    }

  },[dispatch, user])

  
  return (
    <div className="home">
      <div className="workouts">
        {
          workouts && workouts.map((workout) =>(
            // <p key={workout._id}>{workout.title}</p>
            <WorkoutDetails key={workout._id} workout={workout}/>
          ))
        }
      </div>   
      <WorkoutForm/>
    </div>
  )
}

export default Home
