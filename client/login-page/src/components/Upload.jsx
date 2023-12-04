import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../styles/upload.css';

function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a video file');
      return;
    }

    const formData = new FormData();
    formData.append('video', file);

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error.message);
      alert('Error uploading file. Please try again.');
    }
  };

  return (
    <div className="containe">
        <div className="heade">
            <div className="text">Overspeeding Video Uploader</div>
            <div className="underlin"></div>
<br></br>
    <div className="App">
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <br></br>
      <br></br>
      <button onClick={handleUpload}>Upload Video</button>
       
    </div>
    <br></br>
    <Link to="/table"><button>Show Logs</button></Link>
    </div>
    </div>
  );
}

export default Upload;
