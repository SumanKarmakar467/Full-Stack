import React, {useEffect, useState} from 'react'

// Import Component
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm'
const Home = () => {

  const[workouts, setWorkout] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async() => {
      const response = await fetch(`/api/workouts/`)
      const json=await response.json()

      if(response.ok){
          setWorkout(json)
      }
    }
    fetchWorkouts()
  },[])

  
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
