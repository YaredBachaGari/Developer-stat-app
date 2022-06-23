import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink, } from 'react-icons/md';
import {FaUserTie } from 'react-icons/fa';

const Card = () => {
    const {lnkdnUser}= React.useContext(GithubContext)
    const [myuser] = lnkdnUser
    const {firstName, LastName,url, bio2,website, profile_img,current_title, email_address, Work_History} = myuser
    const {company, location, industry} = Work_History[0]


  return (<Wrapper>
          <header>
              <img src={profile_img} alt={firstName}/>
              <div>
                 <h4>{`${firstName} ${LastName}` || 'user not found'}</h4>
                 <p>{email_address || 'No email address'}</p>
              </div>
              <a href={url} target='_blank'>follow</a>
          </header>
          <h4>Bio</h4>
          <p className='bio'>{bio2 || 'Bio is not available'}</p>
          <h4>Current Info</h4>
          <div className='linkss'>
              <p><FaUserTie/>{current_title || 'NA'}</p>
              <p><MdBusiness></MdBusiness>{company || 'NA'}</p>
              <p><MdLocationOn></MdLocationOn>{location || 'unknown location'}</p>
              <a href={`'https://'${website}`}><MdLink></MdLink>{website || 'no website'}</a>
          </div>
         </Wrapper>)
};
const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: 'Linkedin Profile';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .linkss {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
