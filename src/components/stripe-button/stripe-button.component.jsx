import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ( {price}) => {
    const priceInCents = price * 100;
    const key = 'pk_test_ZHXPoHQlEeHWEfIFKvMMXFDs005VR5wNgj';
    const onToken = token => {
        console.log(token);
        alert('Success');
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