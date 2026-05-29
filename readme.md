M: MongoDB (DataBase NoSQL)
E: ExpressJS (Backend)
R: ReactJS (Frontend)
N: NodeJS (Backend)

# Frontend (Browser/ Client)                      Backend (Server)                 DB

    React APP                                         Express + Node                MongoDB


## Backend:
# npm init -y
# npm i express/ npm install express (run backend - node server.js)

# npm i -g nodemon 
(nodemon server.js) (or add this into script "dev":"nodemon server.js" then run (npm run dev))

# npm i dotenv 
(for import the PORT number into .env file)

# npm i mongoose

## Running :- npm run dev 




## API Endpoints
GET     /workouts               --> Get all the workout docs
POST    /workouts               --> Create a new workout doc
GET     /workouts/:id           --> Get a single workout doc
DELETE  /workouts/:id           --> Deletes a single workout doc
PATCH   /workouts/:id           --> update a single workout


# 
server.js - for the backend core
workout.js - for the workout API creating 
workoutMode.js - for database schema
workoutController.js - for the functionality of API called and store in data base


## Frontend

# npm create-react-app frontend  
for react 

# npm i react-router-dom 
routes

# npm start
run the frontend

