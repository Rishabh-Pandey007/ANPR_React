import React, { useState, useEffect } from "react";
import '../styles/Table.css';
import axios from "axios";


// fetching data from api
// const Data = () => {

//   const fetchData = async () => {
//       try {
//           const response = axios.get('http://127.0.0.1:5001/v1/logs', {});

//       } catch (error) {
//           // Handle errors, show an error message, etc.
//           console.error('Error during login:', error);
//       }
//   };

const TableDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // For demonstration purposes, let's assume the API response is an object
    // let response = {
    //   id: 1,
    //   image: "image1.jpg",
    //   vehicleno: "TN 01 AB 1234",
    //   date: "2021-01-01",
    //   time: "10:00:00",
    // };

    const response = axios.get('http://127.0.0.1:5001/v1/logs', {});


    // Wrap the response in an array if it's an object
    setData(Array.isArray(response) ? response : [response]);
  }, []);

  return (
    <div className="containers">
        <div className="headers">
            <div className="text">Vehicle Entry</div>
            <div className="underlines"></div>
        </div><br></br>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Vehicle No</th>
            <th>Event-Date</th>
            <th>Event-Time</th>
          </tr>
        </thead>
        <tbody>
          {!data.length ? (
            <tr>
              <td colSpan="5" className="text-center">
                No data found
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.image}</td>
                <td>{item.vehicleRegistration}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableDisplay;