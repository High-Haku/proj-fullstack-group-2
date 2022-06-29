import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getSingleSupport } from "../redux/actions/supportActions";
import "./Payment.css";

function Payment() {
  const { id } = useParams();
  const { support } = useSelector((state) => state.support);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  console.log(support);

  useEffect(() => {
    dispatch(getSingleSupport(id));
  }, [dispatch]);

  const handleClick = async (e) => {
    e.preventDefault();
    const data = await axios.post("https://pitchpls.herokuapp.com/payment", { amount: support.price });
    const clientSecret = data.data.clientSecret;

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      },
    })

    if (payload.error) {
      Swal.fire({
        icon: 'error',
        title: (payload.error.message),
        color: '3E497A',
        backdrop: 'rgb(62, 73, 122)',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: "Payment has been successful",
        color: '3E497A',
        backdrop: 'rgb(62, 73, 122)',
      });
      // window.location.replace("http://localhost:3000");
      navigate("/");
    }
  }

  if (support) {
    return (
      <div className="d-flex justify-content-center mt-5 p-5">
        <div className="col-4 all-font">
          <div className="card card-blue p-3 text-white mb-1"> <span className="black">You have to pay</span>
            <div className="d-flex flex-row align-items-end mb-1">
              <h1 className="black">IDR {support.price}</h1>
            </div> <span className="black">Enjoy all the rewards below from support you have given</span>
            <div className="hightlight"> <span>{support.reward}</span> </div>
          </div>
          <div className="card-el mt-3"><CardElement /></div>
          <div className="d-grid"><button onClick={handleClick} className="btn-pay">Pay</button></div>
        </div>
      </div>
    )
  }
  else {
    return (
      <h1>Loading</h1>
    )
  }
}

export default Payment