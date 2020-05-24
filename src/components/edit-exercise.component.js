import React,{Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class editexerciseList extends Component{
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
                users:[]
        }
    }
 componentDidMount(){
        axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
        .then(
            
            response=>
            {
            this.setState({
                title:response.data.title,
                description:response.data.description,
               date:new Date(response.data.date)


            })
        }).catch(function(error){
                console.log(error);
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
    onChangeDuration(e){
        this.setState({
            duration:e.target.value
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
      axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id,task)
      .then(res=>console.log(res.data));
      
  }
  
  
  render() {
    return (
    <div>
      <h3> Task Edit Panel</h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>Title: </label>
          <input  type="text"
              required
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
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Task" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}