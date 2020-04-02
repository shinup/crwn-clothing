import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ( {price}) => {
    const priceInCents = price * 100;
    const key = 'pk_test_ZHXPoHQlEeHWEfIFKvMMXFDs005VR5wNgj';
    const onToken = token => {
        axios({
            url : 'payment',
            method: 'post',
            data:{
                amount : priceInCents,
                token
            }
        }).then( (response)=> console.log(response))
        .catch(error => alert(error.message))
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total is $${price}`}
            amount= {priceInCents}
            panelLabel='Pay now'
            token={onToken}
            stripeKey= {key}
        />
    )
};

export default StripCheckoutButton;