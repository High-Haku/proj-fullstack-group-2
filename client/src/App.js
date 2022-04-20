// import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Register from "./components/Register"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contents from './components/Contents';
import Rewards from './components/Rewards';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ContentDetail from "./components/ContentDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Contents />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/support/:id" element={<Rewards />} />
          <Route path="/contents/:id" element={<ContentDetail />} />
        </Route>
      </Routes>
      {/* <ContentDetail /> */}
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