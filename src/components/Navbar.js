import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';



const Navbar = () => {
  const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0(); 
  const isUser = isAuthenticated && user

  return <div className='dashBoardNav-conatiner'>
            <div className='dashBoardNav'>
                <div className='welcome-user'>
                  {isUser && user.picture && <img src={`${user.picture}`}/>}
                  {isUser && user.name && <p>Welcome, <strong style={{color:'#262548',fontWeight:'bolder', marginBottom:'0rem', fontSize:'1.1rem'}}>{user.name}</strong></p>}
                </div>
                <ul className='Navigation-menu'>
                    <Link to='/' className=''>
                      <button>GitHub</button>
                    </Link>
                  <Link to='/linkedin' className=''>
                      <button>Linkedin</button>
                  </Link>
                  <Link to='/twitter' className=''>
                      <button>Twitter</button>
                  </Link>
                  <Link to='/fact' className=''>
                      <button>Facts</button>
                  </Link>
                </ul>
                <div className='Login-Logout'>
                    {isUser ? <button onClick={()=>{logout({returnTo:window.location.origin})}}>Logout</button> : <button onClick={loginWithRedirect} className='btn'>Login</button>} 
                </div>
            </div>
        </div>
            
            
        
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

export default Navbar;
