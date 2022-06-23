import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import hero from '../images/heroImage.png';
import LoginBodyImg from '../images/LoginBodyImage.svg'
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa';
import { Footer } from '../components';

const Login = () => {

  const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0();
  const isUser = isAuthenticated && user;

  return <div className='login-nav'>
              <div className='Hero-container'>
               <nav className='nav'>
                 <div className='nav-cont'>
                      <div className='nav-head'>
                            <h2 className='logo-first'>Developer <span className='logo'>Stat</span></h2>
                      </div>
                      <ul>
                          <li className='menu'>
                          <div className='Login-Logout'><button onClick={loginWithRedirect} className='Login-Logout'>Login</button></div>
                          </li>
                      </ul>
                 </div>
               </nav>
               <div className='hero-section'>
                      <div>
                        <h3>Looking For An Awesome Developer? </h3>
                          <p>This website provides key statistical metrics to evaluate developer's technical and bevavioural skill.</p>
                      </div>
                      <img src={hero}/>
               </div>
              </div>
              <div className='bodyimg'>
                <img src={LoginBodyImg}/>
              </div>
              <Footer/>
         </div>
};


export default Login;
