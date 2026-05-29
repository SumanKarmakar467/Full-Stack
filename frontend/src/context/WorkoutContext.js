const { createContext, useReducer} = require('react');

export const WorkoutContext = createContext();



    const[state, dispatch]= useReducer(workoutsReducer, {
        workouts:null
    })


export const WorkoutContextProvider = ({children}) => {
    return (
        <WorkoutContext.Provider>
            {children}
        </WorkoutContext.Provider>
    )
}