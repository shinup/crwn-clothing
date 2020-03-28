import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }

    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
            
        } catch (error) {
            console.log(error);
        }

       
    }
    handleChange =(e) =>{
        const {value, name} = e.target;
        this.setState({[name] : value});
    }
    render(){
        return(
            <div className='sign-in'>
            <h2>I already have account</h2>
            <span> Sign in</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name='email' 
                    value={this.state.email}  
                    type='email' 
                    required  
                    handleChange={this.handleChange} 
                    label='email'
                />               
                <FormInput 
                    name='password' 
                    value={this.state.password} 
                    type='password' 
                    required 
                    handleChange={this.handleChange} 
                    label='password'
                />   
                <div className='buttons'>
                    <CustomButton value='Submit' > Sign in </CustomButton>              
                    <CustomButton onClick={signInWithGoogle} value='Submit'  isGoogleSignIn> Sign in with google </CustomButton>
                </div>       
            </form>

            </div>
        )
    }
}

export default SignIn