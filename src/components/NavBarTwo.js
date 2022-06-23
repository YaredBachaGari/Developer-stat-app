import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';



const NavBartwo = () => {
    
  const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0(); 
  const isUser = isAuthenticated && user
   
  const [toggleClicked, setToggleClicked] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if(toggleClicked){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }else{
      linksContainerRef.current.style.height = '0px'
    }
  },[toggleClicked])
  
  return <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <div className='welcome-user'>
                        {isUser && user.picture && <img src={`${user.picture}`}/>}
                        {isUser && user.name && <p>Welcome, <strong style={{color:'#262548', marginBottom:'0rem', fontSize:'1rem'}}>{user.name}</strong></p>}
                    </div>
                    <button onClick={()=>{setToggleClicked(!toggleClicked)}} className='nav-toggle'><FaBars/></button>
                 </div> 
                 <div className='links-container' ref={linksContainerRef}> 
                        <ul className='links' ref={linksRef}>
                            <Link to='/' className=''>
                            <button className='menu'>GitHub</button>
                            </Link>
                            <Link to='/linkedin' className=''>
                                <button className='menu'>Linkedin</button>
                            </Link>
                            <Link to='/twitter' className=''>
                                <button className='menu'>Twitter</button>
                            </Link>
                            <Link to='/fact' className=''>
                                <button className='menu'>Facts</button>
                            </Link>
                            <div className='Login-Logout'>
                                {isUser ? <button onClick={()=>{logout({returnTo:window.location.origin})}}>Logout</button> : <button onClick={loginWithRedirect} className='btn'>Login</button>} 
                            </div>
                        </ul>
                 </div>
            </div>
        </nav>

            
            
        
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default NavBartwo;
