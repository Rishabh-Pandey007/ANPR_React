import React, { useState, useEffect } from "react";
import '../styles/Table.css';
import axios from "axios";

const TableDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5001/v1/logs', {});
        setData(response.data); // Assuming the data is in the 'data' property
      } catch (error) {
        console.error('Error during API request:', error);
      }
    };

    fetchData();
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
            <th>Vehicle No</th>
            <th>Event-Date</th>
            <th>Event-Time</th>
            <th>Image</th>
            <th>Spot</th>
          </tr>
        </thead>
        <tbody>
          {!data.rows || !data.rows.length ? (
            <tr>
              <td colSpan="5" className="text-center">
                No data found
              </td>
            </tr>
          ) : (
            data.rows.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.vehicleRegistration}</td>
                <td>{item.redableEventTimeStamp.date}</td> {/* Accessing date property */}
                <td>{item.redableEventTimeStamp.time}</td> {/* Accessing time property */}
                <td>{item.vehicleImage}</td> {/* Corrected property name */}
                <td>TIMSCDR</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableDisplay;
