import './App.css';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Register from "./components/Register"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contents from './components/Contents';
import Rewards from './components/Rewards';
import Navbar from './components/Navbar';
import Login from './components/Login';

import NotFound from './components/NotFound';
import FormUpload from './components/FormUpload';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Post from './components/Post';
import ContentDetail from './components/ContentDetail';


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
          <Route path="/support/:id" element={<Rewards />} />
          <Route path="/contents/:id" element={<ContentDetail />} />
          <Route path="*" element={<NotFound />} />
        <Route path="/form" element={<FormUpload />} />
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