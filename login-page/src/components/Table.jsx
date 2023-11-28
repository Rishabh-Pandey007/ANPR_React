import React, { useState, useEffect } from "react";
import axios from "axios";

const TableDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    axios.get("http://your-backend-api.com/api/your_table_name").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Vehicle No</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.image}</td>
              <td>{item.vehicleno}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDisplay;
