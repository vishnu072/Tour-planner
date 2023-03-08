import React, { useState } from 'react';
import axios from 'axios';
import './details.css';

const Delete = () => {
  const [rating, setrating] = useState('');
   

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/del?rating=${rating}`)
      .then(response => {
        alert('Details is deleted successfully!');
        setrating('');
         
      })
      .catch(error => {
        alert('Failed to delete the details.');
        console.error(error);
      });
  };

  return (
    <div className="actual">
      <h1>Delete</h1>
      <form>
        <div id="a">
          <label htmlFor="id">Rating</label><br/>
          <input type="text" id="rating" value={rating} onChange={event => setrating(event.target.value)}
          />
        </div>
          
       <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default Delete;