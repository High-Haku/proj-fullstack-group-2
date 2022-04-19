import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import "./Register.css";
import { CloudUploadOutlined } from "@ant-design/icons/lib/icons";

const Register = () => {
  // const dispatch = useDispatch();

  // const [user, setUser] = useState({
  //   username : "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setUser(()=>({
  //     ...user,
  //     [e.target.name]: e.target.value
  //   }))
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(userRegister({username: username, email: email, password: password}))
  // }

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h3 id="title" className="mb-4 pb-3"><CloudUploadOutlined /> Sign up</h3>
                          <div className="form-group">
                            <input
                              type="text"
                              name="username"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="username"
                              autoComplete="off"
                              // value={user.username}
                              // onChange={handleChange}
                            />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="email"
                              className="form-style"
                              placeholder="Your Email"
                              id="email"
                              autoComplete="off"
                              // value={user.email}
                              // onChange={handleChange}
                            />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              className="form-style"
                              placeholder="Your Password"
                              id="password"
                              autoComplete="off"
                              // value={user.email}
                              // onChange={handleChange}
                            />
                          </div>
                          <br />
                          <Button id="btn-regis">Submit</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
