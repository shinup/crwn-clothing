import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

const SignUp = () =>{

    const defaultState = {
        displayName: '',
        email : '',
        password: '',
        confirmPassword: ''
    };

    const [userProfile, setUserProfile] = useState(defaultState);
    const {displayName, email, password, confirmPassword} = userProfile;
   
    const handleSubmit =  async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = userProfile;
        if(password !== confirmPassword){
            alert("password did not match");
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user,{ displayName});
            setUserProfile({
                displayName: '',
                email : '',
                password: '',
                confirmPassword: ''
            });

            
        } catch (error) {
            
        }
    };

    const handleChange= event => {
        const {name, value} = event.target;
        setUserProfile({...userProfile, [name]: value});
    };  

    return(
        <div className='sign-up'>
            <h2 className='title'> I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Display Name'
                required
            />
            <FormInput
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
            />
            <FormInput
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
            />
            <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='Confirm password'
                required
            />
            <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    );
  
}

export default SignUp