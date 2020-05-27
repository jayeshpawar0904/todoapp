import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import axios from'axios'
import './modal.css'

export class CreateExercises extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:'',
            description:'',
            date:new Date(),
            label:'',
            status:"new",
            users:[],
       
             
        }

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeLabel=this.onChangeLabel.bind(this);
    
    }

    
    componentDidMount() {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            console.log(response);
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.label),
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }

    onChangeTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeLabel(e){
      this.setState({
        label:e.target.value
      })
  }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }

    onChangeDate(date){
        this.setState({
            date:date
        })
    }

    onSubmit(e){
        e.preventDefault();
        const task={
            title:this.state.title,
            description:this.state.description,
            date:this.state.date,
            label:this.state.label,
            status:this.state.status
        }

        axios.post('http://localhost:5000/exercises/add',task)
          .then(res => console.log(res.data));

          window.location='/';
        
       
          
    }
 
  

    render() {
        return (
          
            <div>
            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModalNorm">
    Launch Normal Form 
</button>
<div className="modal fade" id="myModalNorm" tabIndex="-1" role="dialog" 
     aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" 
                   data-dismiss="modal">
                       <span aria-hidden="true">&times;</span>
                       <span className="sr-only">Close</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">
                    Modal title
                </h4>
            </div>
            <div className="modal-body">
                
                <form role="form">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control"
                      id="exampleInputEmail1" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control"
                          id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <div className="checkbox">
                    <label>
                        <input type="checkbox"/> Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
                
                
            </div>
            
            <div className="modal-footer">
                <button type="button" className="btn btn-default"
                        data-dismiss="modal">
                            Close
                </button>
                <button type="button" className="btn btn-primary">
                    Save changes
                </button>
            </div>
        </div>
    </div>
</div>





      <h3>Create your Notes</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group">
          <label>Title: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group"> 
          <label>label: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.label}
              
              
              onChange={this.onChangeLabel}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Add Task" className="btn btn-primary" />
        </div>
      </form>

   </div>
        )
    }
}

export default CreateExercises