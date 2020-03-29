import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkoutpage.styles.scss'

const checkoutPage = ({cartItems, total}) =>(
    <div className='checkout-page'> 
        <div className='checkout-header'>
            <dv className='header-block'>
                <span>Product</span>
            </dv>
             <dv className='header-block'>
                <span>Description</span>
            </dv>
            <dv className='header-block'>
                <span>Qty</span>
             </dv>
             <dv className='header-block'>
                <span>Price</span>
             </dv>
             <dv className='header-block'>
                <span>Remove</span>
             </dv>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
        }
        <div className='total'>
            <span>Total: $ {total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
 cartItems : selectCartItems,
 total : selectCartTotal
});
export default connect(mapStateToProps)(checkoutPage);