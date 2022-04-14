import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import "./Register.css";

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
                <h3 className="mb-0 pb-3">
                  <span>Register as</span>
                </h3>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">User</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="username"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="username"
                              autocomplete="off"
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
                              autocomplete="off"
                              // value={user.email}
                              // onChange={handleChange}
                            />
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              className="form-style"
                              placeholder="Your Password"
                              id="password"
                              autocomplete="off"
                              // value={user.email}
                              // onChange={handleChange}
                            />
                          </div>
                          <br />
                          <Button>Submit</Button>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Pitcher</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="username"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="username"
                              autocomplete="off"
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
                              autocomplete="off"
                              // value={user.email}
                              // onChange={handleChange}
                            />
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                              // value={user.email}
                              // onChange={handleChange}
                            />
                          </div>
                          <br />
                          <Button>Submit</Button>
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
