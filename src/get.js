import axios from "axios";
import "./details.css";
import React, { useState,useEffect } from "react";
function Main(){
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/get')
          .then(response => {
              setQuotes(response.data);
          })
          .catch(error => {
              console.log(error);
          });
  }, []);
  
    return (
      <div className="body">
      <div className="navbar">
        
      </div>
      <div>
        <p>
          Tour Database !!
        </p>
      </div>
      <div className="table">
        <table border={1}>
          <thead>
            <tr>
              <th>Rating</th>
              <th>City Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
             {quotes.map(quote =>(
              <tr key={quote.rating}>
              <td>{quote.rating}</td>
              <td>{quote.cityname}</td>
              <td>{quote.time}</td>
              </tr>

             )
          
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Main;