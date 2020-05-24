import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateTask from "./components/create-task.component";
import CreateUser from "./components/create-user.component";
import Sidebar from './components/Sidebar';

const items =[
  {name:'home', label:'home'},
  {name:'billing', label:'Billing'},
  {name:'settings', label:'Setting'},
  
]
function App() {
  return (
    <Router>
    <div >
    <Navbar/>

    <br/>
   <div className="container">
<Route path ="/" exact component ={ExercisesList}/>
<Route path ="/edit/:id" component={EditExercise}/>
<Route path ="/create"  component={CreateTask}/>
<Route path ="/user" component={CreateUser}/>
</div>
</div>
 </Router>

  );
}

export default App;
