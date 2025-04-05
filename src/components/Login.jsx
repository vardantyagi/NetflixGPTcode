import React, { useState , useRef, useEffect } from 'react'
import Header from './Header'
import bg from '../images/background.jpg'
import vardan from '../images/vardan.jpeg'
import { checkValidData } from '../utility/Validate'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utility/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addUser } from '../utility/userSlice'

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const name = useRef(null);
  const email= useRef(null);
  const password= useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (e)=>{
    e.preventDefault();
    // validate the form data

    // check for empty values also

    if(isSignInForm){ // for signin
      const response = checkValidData(email.current.value,password.current.value);
      setErrorMessage(response);
      if(response){ // some error occured
        return;
      }
      // signin logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // you can directly dispatch from here
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        })
        .finally(()=>{
          console.log('print before null signin');
          console.log(email.current.value);
          console.log(password.current.value);
          email.current.value = null;
          password.current.value = null;
          console.log('print after null signin');
          console.log(email.current.value);
          console.log(password.current.value);
        })
    }
    else{ // for signup
      const response = checkValidData(email.current.value,password.current.value,name.current.value);
      setErrorMessage(response);
      if(response){ // some error occured
        return;
      }
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value, 
        password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // update the username
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: vardan,
        }).then(() => {
          // Profile updated!
          const { uid,email,displayName,photoURL } = auth.currentUser;
          dispatch(addUser(
            {
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL,
            }
          ));      
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
        });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
      })
      .finally(()=>{
          console.log('print before null signup');
          console.log(name.current.value);
          console.log(email.current.value);
          console.log(password.current.value);
          name.current.value = null;
          email.current.value = null;
          password.current.value = null;
          console.log('print after nullsignup');
          console.log(name.current.value);
          console.log(email.current.value);
          console.log(password.current.value);
      });
      // name.current.value = null;
      // email.current.value = null;
      // password.current.value = null;
      console.log(name.current.value);
      console.log(email.current.value);
      console.log(password.current.value);
      
    }
  }
  const toggleSigninForm = (e)=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className=''>
      <Header/>
      <div className='absolute'>
        <img className='fixed w-screen h-screen object-cover' src={bg} alt="bg" />
      </div>

      {/* can use formik library for forms */}

        <form className=' w-[75%] sm:w-[60%] lg:w-3/12 absolute p-12 bg-black mx-auto my- right-0 left-0 my-36 text-white opacity-80 rounded-lg' >
        <h1 className='font-black text-3xl py-4'>{isSignInForm==true?'Sign In':'Sign Up'}</h1>
          {
            !isSignInForm && 
            <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />
          }
          <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
          <input ref={password} type="password" placeholder='password' className='p-4 my-4 bg-gray-700 w-full' />
          {/* error message */}
          {
            errorMessage && <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
          }
          {/* <p className='text-red-500 font-bold text-lg py-2'>{errorMessage && errorMessage}</p> */}
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg font-bold' onClick={handleButtonClick}>{isSignInForm==true?'Sign In':'Sign Up'}</button>
          <p className='py-4 font-bold cursor-pointer' onClick={toggleSigninForm}>
          {isSignInForm==true?'New to Netflix? Sign Up Now':'Allready registered? Sign In Now.'}
          </p>
        </form>
      </div>
  )
}

export default Login
// 1:57:36
// 2:49:20