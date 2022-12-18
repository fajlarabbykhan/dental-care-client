import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setcardError] = useState();
  const [success, setSuccess] = useState();
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const { Treatment_fee, patient, patientName, _id } = appointment;
  useEffect(() => {
    fetch("https://dentalcareserver.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ Treatment_fee }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [Treatment_fee]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // if (error) {
    //   //   console.log("[error]", error);
    //   setcardError(error.message);
    // } else {
    //   // console.log('[PaymentMethod]', paymentMethod);
    //   setcardError("");
    // }
    setcardError(error?.message || "");

    setSuccess("");

    setPaymentProcessing(true);

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      });
    if (intentError) {
      setcardError(intentError?.message);
      setPaymentProcessing(false);
    } else {
      setcardError("");
      // console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("Your payment is completed");

      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://dentalcareserver.onrender.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setPaymentProcessing(false);
          console.log(data);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="mt-4 btn btn-success btn-sm"
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-error">{cardError}</p>}
      {success && <p className="text-blue-500">{success}</p>}
      {success && (
        <p className="text-blue-500">Your transaction id: {transactionId}</p>
      )}
    </>
  );
};

export default CheckoutForm;
