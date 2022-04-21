import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Rewards.css";
import { getSingleContent } from "../redux/actions/contentsActions";
import { Link, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';

function Rewards() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(getSingleContent(id));
  }, [dispatch]);

  const handlePayment = (id) => {
    console.log(id);
  }

  if (content) {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-8">
            {content.reward.map((item) => {
              return (
                <div className="col-6 mb-4" key={item._id}>
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
                          <Link to={`/support/payment/${item._id}`}>
                            Select
                          </Link>
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
                  We're here to share ideas and have fun, therefore 
                </p>
              </div>
              <div className="ms-2">
                <h2>FAQ</h2>
                <ul>
                For fundraising:
                 <li>Set your fundraiser goal</li> 
                 <li>Tell your story</li>
                 <li>Add a picture or video</li>
                 <Button>Watch a video tutorial</Button>
    
                </ul>
                <ul>
                  Share with friends:
                  <li>Send Emails</li>
                  <li>Send text messages</li>
                  <li>Share on social media</li>
                  <Button>Watch a video tutorial</Button>
                </ul>
                <ul>
                  Managing your donations:
                  <li>Accept donations</li>
                  <li>Thank donors</li>
                  <li>Withdraw funds</li>
                  </ul>
                
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
