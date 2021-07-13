import React from 'react';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { signInWithGoogle } from './../firebase/firebase.utils';




class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I have already an account !</h2>
                <span>Sign with your email and password.</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        label='Email'
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required />

                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        label='Password'
                        value={this.state.password}
                        required />
                    <buttons className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in Google
                            {' '}
                        </CustomButton>
                    </buttons>
                </form>
            </div>
        );
    }
}

export default SignIn;


