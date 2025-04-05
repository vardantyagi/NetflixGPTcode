import React, { useEffect } from 'react'
import react from '../assets/react.svg'
import NetflixLogo from '../images/nfLogo.png'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utility/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utility/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGPTsearchView } from '../utility/gptSearchSlice';
import { SUPPORTED_LANGUAGES } from '../utility/constants';
import { changeLanguage } from '../utility/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = ()=>{
    console.log('signout called');
    
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
    }

  useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signedin / signedup
        const { uid,email,displayName,photoURL } = user;
        dispatch(addUser(
          {
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL,
          }
        ));
        navigate('/browse');
        // window.location.href = '/browse'
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
        // window.location.href = '/'
      }
    });
    return ()=> unsubscribe();
    // unsubscribe is called because if header reloads then onAuthStateChanged will be called but we don't want to call it so we will unsubscribe/unmount it. It is a good practice
  },[])
  const handleGPTsearchClick = ()=>{
    // toggle GPT search
    dispatch(toggleGPTsearchView());
  }
  // const toggle = useSelector((state)=>state.GPTsearch.showGPTsearch);
  // console.log(toggle);
  
  const user = useSelector((state)=>state.user);
  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  const showGPTsearchView = useSelector((state)=>state.GPTsearch.showGPTsearch);
  return (
    <div className='fixed px-8 py-2 w-screen bg-gradient-to-b from-black z-30 flex justify-center items-center flex-col md:flex-row md:justify-between'
>
      <img className='w-44' src={NetflixLogo} alt="logo" />
      {
        user &&
        <div className='flex p-2 flex-row'>
          {
            showGPTsearchView &&
            <select name="languages" id="lang" className='p-2 bg-gray-900 text-white m-2'
            onChange={(e)=>handleLanguageChange(e)}
            >
              {
                SUPPORTED_LANGUAGES.map((lang)=>{
                  return(
                    <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                  )
                })
              }
            </select>
          }
          <button className='py-2 px-2 m-2 bg-purple-800 text-white rounded-lg mx-4' onClick={handleGPTsearchClick}>{showGPTsearchView?'Home':'GPT Search'}</button>
          <img className='hidden md:block w-12 h-12'
          // src={react}
          src={user?.photoURL}
          alt="userImage" />
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>}
      </div>
  )
}

export default Header