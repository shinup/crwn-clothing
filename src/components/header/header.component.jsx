import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectHidden } from '../../redux/cart/cart.selectors'

const Header= ({currentUser, hidden}) =>(
    <div className='header'> 
        <Link to='/' className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Contact
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={ ()=> auth.signOut()}>Sign Out</div>
                :
                <Link className='opion' to='/signin'>Sign In</Link>
            }
            <CartIcon />
        </div>
       { 
           hidden  ? null : <CartDropdown /> 
        }
    </div>
)

const mapStateToProps=createStructuredSelector({
    currentUser:  selectCurrentUser,
    hidden : selectHidden
});

export default connect(mapStateToProps)(Header);