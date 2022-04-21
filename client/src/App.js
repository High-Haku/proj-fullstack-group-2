import './App.css';
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Register from "./components/Register"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contents from './components/Contents';
import Rewards from './components/Rewards';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Payment from './components/Payment'
import NotFound from './components/NotFound';
import FormUpload from './components/FormUpload';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ContentDetail from './components/ContentDetail';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51KpVowJGubigxUpJt5PuHZdhAv4WBqEokhMQLDyLn3RlgvgUIWflR928hXuaFTHVMkJnAxwYD93isfSuGcgc7yeG00xuml382f');

function App() {
  
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const cookie = Cookies.get('token')

    if (cookie) {
      setIsLogin(true)
    }
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Contents />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/support/:id" element={isLogin === true ? <Rewards /> : <Navigate to={"/login"} />} />
          <Route path="/contents/:id" element={<ContentDetail />} />
          <Route path="/support/payment/:id" element={
            isLogin === true ?
            <Elements stripe={stripePromise}><Payment /></Elements>
            : <Navigate to={"/login"} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/form" element={<FormUpload />} />
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