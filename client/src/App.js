import './App.css';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Register from "./components/Register"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contents from './components/Contents';
import Rewards from './components/Rewards';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import Post from './components/Post';

function App() {
  const [isLogin, setIsLogin ] = useState(false)
  
  console.log(Cookies.get('token'))

  useEffect(() => {
    const cookie =  Cookies.get('token')
  
  if(cookie){
    setIsLogin(true)
  } 
  }, [])
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Contents />} />
          <Route path="/login" element ={<Login/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/support" element={isLogin !== null ? <Rewards /> : <Navigate to={"/login"} />} />
        </Route>
        <Route path='/create-a-post' element={<Post/>}/>
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