import React, { useState} from "react";
import axios from "axios";
import './details.css';

function UpdatePage() {
  const [todo, setTodo] = useState({
    rating:'',
    cityname:'',
    time:'',
  });

  const handleChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/put`, todo).then((res) => {
      console.log(res.data);
      setTodo({ rating: "", cityname: "", time: ""});
    });
  };

  return (
  
    <div className="actual">
        UPDATE<br/><br/>
      <form onSubmit={handleSubmit}>
      <label>Rating </label><br/>
          <input type="number" name="rating" value={todo.rating} onChange={handleChange} /><br/>
        <label>City Name </label><br/>
          <input type="text" name="cityname" value={todo.cityname} onChange={handleChange} />
        <br/>
        <label>Time </label><br/>
          <input type="text" name="time" value={todo.time} onChange={handleChange} />
        <br/>
        
        <button type="submit">Update</button>
      </form>
   
    </div>
 
  );
}
export default UpdatePage;