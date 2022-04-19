// import './App.css';
import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom";
import Register from "./components/Register"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contents from './components/Contents';
import Rewards from './components/Rewards';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Contents />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/support" element={<Rewards />} />
        </Route>
      </Routes>
    </div>
  );
}

function Index() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;