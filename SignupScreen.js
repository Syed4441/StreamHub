import React, { useRef } from 'react';
import './SignupScreen.css';
import { auth } from '../firebase';

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        // Registration successful, you can perform additional actions here
        console.log('Registration successful', authUser);

      })
      .catch((error) => {
        // Handle registration errors
       // console.log('Registration error', error);
       alert(error.message);
    });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((authUser) => {
         
          console.log('Sign-in successful', authUser);
  })
        .catch((error) => {
          // Handle sign-in errors
          console.log('Sign-in error', error);
  
        
    });
  };

  

  

    return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button type='submit' onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className='signupScreen_gray'>New to StreamHub? </span>
          <span className='signupScreen_link' onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
