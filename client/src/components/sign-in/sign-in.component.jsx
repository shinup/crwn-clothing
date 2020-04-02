import React ,{useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = (props)=> {    
    const [userCredentials, setCredentials] = useState({email:'', password:''});

    const handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = userCredentials;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({email:'', password:''});
            
        } catch (error) {
            console.log(error);
        }

       
    }

    const handleChange =(e) =>{
        const {value, name} = e.target;
        setCredentials({...userCredentials, [name] : value});
    }
    const {email, password} = userCredentials;
  
    return(
        <div className='sign-in'>
        <h2>I already have account</h2>
        <span> Sign in</span>
        <form onSubmit={handleSubmit}>
            <FormInput 
                name='email' 
                value={email}  
                type='email' 
                required  
                handleChange={handleChange} 
                label='email'
            />               
            <FormInput 
                name='password' 
                value={password} 
                type='password' 
                required 
                handleChange={handleChange} 
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

export default SignIn