import React from 'react';
import './Rewards.css'

function Rewards() {
  const array = [
    {
      id: 1,
      name: "Support 1",
      description: "Basic support",
      reward: "Get a sample product",
      price: "100000"
    },
    {
      id: 2,
      name: "Support 2",
      description: "Standard support",
      reward: "Get a sample product",
      price: "300000"
    },
    {
      id: 3,
      name: "Support 3",
      description: "Expert support",
      reward: "Get a sample product",
      price: "500000"
    }
  ];
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-8">
          {array.map(item => {
            return (
              <div className="col-6 mb-4" key={item.id}>
                <div className="card card1 h-100">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <small className='text-muted'>{item.description}</small>
                    <br />
                    <span className="h2">{item.price}</span>IDR
                    <br />
                    <p>{item.reward}</p>
                    <div className="d-grid my-3">
                      <button className="btn btn-outline-dark btn-block">Select</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="col-4">
          <div className="sticky-top">
            <div>
              <h2>Disclaimer</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae consectetur, cupiditate totam quidem esse nesciunt voluptas qui iure ratione officia?</p>
            </div>
            <div>
              <h2>FAQ</h2>
              <p>1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, adipisci!</p>
              <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>3. Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <p>4. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rewards;