import axios from "axios";
import React, { Component } from "react";
import "./details.css";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating:'',
      cityname:'',
      time:'',
    };
}

  handleratingChange = (event) => {
    this.setState({ rating: event.target.value });
  };

  handlecitynameChange = (event) => {
    this.setState({ cityname: event.target.value });
  };
  handletimeChange = (event)=>{
    this.setState({time : event.target.value});
  };
  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      rating: this.state.rating,
      cityname: this.state.cityname,
      time: this.state.time,
    };
    axios.post('http://127.0.0.1:8080/post', data)
  };
    render(){
      return(
        <div className="heading" >
      <div className="actual">    
          <form onSubmit={this.handleSubmit}>    
            <label>Rating</label><br/>
            <input type="text" name="rating" id="rating" placeholder="rating" value={this.state.rating} onChange={this.handleratingChange} /><br/>    
            <label>City Name</label><br/>
            <input type="text" id="cityname" placeholder="city name" value={this.state.cityname} onChange={this.handlecitynameChange} /> <br/>
            <label >Time</label><br/>
            <input type="text" id="time" placeholder="time" name="time" value={this.state.time} onChange={this.handletimeChange}/><br/>
            
            
            <button className="button" type="submit">Submit</button><br/>
          </form>
        </div>
        </div>
        
  );
            }
          }
export default Details;