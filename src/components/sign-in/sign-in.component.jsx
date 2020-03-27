import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }

    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.setState({email:'', password:''});
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
                <CustomButton type='submit' value='Submit' > Sign in </CustomButton>
            </form>

            </div>
        )
    }
}

export default SignIn