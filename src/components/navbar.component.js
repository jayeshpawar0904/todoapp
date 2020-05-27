import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom';
import CreateUser from "./create-user.component";
import Boards from "./boards";


export default class Navbar extends Component{
  
    render(){
        return (
          <div>
          
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <Link to='/' className="navbar-brand">ToDoApp</Link>

              
              
              <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/" className="nav-link">TODO tasks</Link>
                </li>
                <li className="navbar-item">
                <Link to="/create" className="nav-link"> Add task</Link>
                </li>
                <li className="navbar-item">
                <Link to="/boards" className="nav-link"> Boards</Link>
                </li>
              </ul>
              </div>
            </nav>
            
            </div>
          );



    
        
    }
}