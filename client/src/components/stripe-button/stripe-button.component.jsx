import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey ='pk_test_51JBWnXBMXTWgHXZ6trMsbIgD7SG6ZSGoh1pzZGI4ZkIxPKhFkABvqmaaWCDaWjO1BWhgYcjKk03GY6UnMMOuvgj800GHlFrLWZ';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data:{
        amount: priceForStripe,
        token // token:token
      }
    })
    .then(res => {
      alert('Payment is successful!')
    })
    .catch(error => {
      console.log('Payment error: ' + JSON.parse(error))
      alert('There was an issue with you payment. Please be sure use the provided credit card.')
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
