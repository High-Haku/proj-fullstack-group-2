import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Rewards.css";
import { getSingleContent } from "../redux/actions/contentsActions";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap"

function Rewards() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const content = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(getSingleContent(id));
  });

  if (content.data) {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-8">
            {content.data.reward.map((item) => {
              return (
                <div className="col-6 mb-4" key={item.id}>
                  <div id="card-container" className="card card1 h-100">
                    <div className="card-body">
                      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {item.name}
                      </p>
                      <small>{item.description}</small>
                      <br />
                      <span className="h2">{item.price}</span>IDR
                      <br />
                      <p>{item.reward}</p>
                      <div className="d-grid my-3">
                        <Button
                          className="btn-select-reward"
                          variant="outline-warning"
                        >
                          Select
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-4">
          <div id="disclaimer-container" className="sticky-top">
              <div className="ms-2">
                <h2>Disclaimer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore vitae consectetur, cupiditate totam quidem esse
                  nesciunt voluptas qui iure ratione officia?
                </p>
              </div>
              <div className="ms-2">
                <h2>FAQ</h2>
                <p>
                  1. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere, adipisci!
                </p>
                <p>
                  2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p>3. Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <p>4. Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }
}

export default Rewards;
