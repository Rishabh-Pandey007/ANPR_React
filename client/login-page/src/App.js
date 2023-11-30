import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
//import lostpassword from './components/lostpassword';
import Upload from './components/Upload';
import TableDisplay from './components/Table';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/lostpassword" element={<lostpassword />} /> */}
        <Route path="/upload" element={<Upload />} />
        <Route path="/table" element={<TableDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
