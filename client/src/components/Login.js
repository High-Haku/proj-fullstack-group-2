import React from "react";
import { Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {

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
                          <h4 className="mb-4 pb-3">Login</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              className="form-style"
                              placeholder="Your Email"
                              id="email"
                              autocomplete="off"
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
                            />
                          </div>
                          <Button>Submit</Button>
                          <p className="mb-0 mt-4 text-center">
                            <a href="#0" class="link">
                              Forgot your password?
                            </a>
                            or
                            <a href="#0"> Register</a>
                          </p>
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

export default Login;
