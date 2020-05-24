import React,{Component,useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function addCheckbox() {
  const {checkboxes} = this.state,
      label = this.refs.label.value;

  checkboxes.push({
      checked: true,
      label
  });

  this.setState({
      checkboxes
  });
}

function toggleCheckbox(index) {
  const {checkboxes} = this.state;

  checkboxes[index].checked = !checkboxes[index].checked;

  this.setState({
      checkboxes
  });
}

function renderCheckboxes() {
  const checkboxes = this.state.checkboxes;

  return checkboxes
      .map((checkbox, index) =>
          <div>
              <label>
                  <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={toggleCheckbox.bind(this, index)}
                  />
                  {checkbox.label}
              </label>
          </div>
      );

 
console.log(checkboxes);
      

}


export default class createtaskList extends Component{
  constructor(props){
    super(props);
    this.onChangeTitle=this.onChangeTitle.bind(this);
    this.onChangeDescription=this.onChangeDescription.bind(this);
    this.onChangeDate=this.onChangeDate.bind(this);
    this.onSubmit=this.onSubmit.bind(this);


    this.state={
        title : '',
            description :'',
            date :new Date(),
            checkboxes:[],

            
    }
}


 componentDidMount(){
   const array=[];
 axios.get('http://localhost:5000/users/').then
 (response =>{
   if(response.data.length>0)
   {
    this.setState({
      checkboxes:response.data.map(user=>user)
    })
  }

 })
}

onChangeTitle(e){
    this.setState({
        title:e.target.value
    });
}

onChangeDescription(e){
    this.setState({
        description:e.target.value
    });
}

onChangeDate(date){
    this.setState({
        date:date
    });
}

onSubmit(e){
  e.preventDefault();

  const task ={
     title:this.state.title,
      description:this.state.description,
      date:this.state.date

  }
 
  console.log(task);
  axios.post('http://localhost:5000/exercises/add',task)
  .then(res=>console.log(res.data));

  this.state.checkboxes.map((person)=>{
  
   const labels={
      label:person.label,
      checked:person.checked
    }
      
  axios.post('http://localhost:5000/users/add',labels)
  .then(res=>console.log(res.data)); 
  }
  )



 
  window.location="/";
  
}



render() {

return (
 
<div>


  <form onSubmit={this.onSubmit}>
    <div className="form-group"> 
      <label>Title: </label>
      <input type="text"
      className="form-control"
      placeholder="title here"
      onChange={this.onChangeTitle}
      />
 </div>


    <div className="form-group"> 
      <label>Note : </label>
      <textarea required className="form-control" rows="5" id="description"
      onChange={this.onChangeDescription}
          
      ></textarea>
      
         
    </div>
  
    <div>
    {renderCheckboxes.call(this)}
    <input ref="label" type="text"/>
    <button onClick={addCheckbox.bind(this)}>Add New Label</button>
    </div>


    <div className="form-group">
      <label>Task Deadline: </label>
      <div>
        <DatePicker
          selected={this.state.date}
          onChange={this.onChangeDate}
        />
      </div>
    </div>

    <div className="form-group">
    <input type="submit" value="Add" className="btn btn-success" />

    </div>
  </form>
</div>
)
}
}
