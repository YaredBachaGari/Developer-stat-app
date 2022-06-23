import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist,GoCalendar } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const UserInfo = () => {
  const {githubUsers} = React.useContext(GithubContext)
  const {public_repos, followers, following, public_gists, created_at} = githubUsers
  const accountopened = (new Date().getFullYear()) - (new Date(created_at).getFullYear())
  const yearsOnGithub = accountopened > 0? accountopened : '0'

  const items = [
    {
      id:1,
      icon:<GoRepo className='icon'/>,
      value:public_repos,
      label:'Repos',
      color:'pink'
    },
    {
      id:2,
      icon:<GoCalendar className='icon'/>,
      value:yearsOnGithub,
      label:'Years on GitHub ',
      color:'kay'
    },
    {
      id:3,
      icon:<FiUsers className='icon'/>,
      value:followers,
      label:'follower',
      color:'green'
    },
    {
      id:4,
      icon:<FiUserPlus className='icon'/>,
      value:following,
      label:'following',
      color:'purple'
    },
    {
      id:5,
      icon:<GoGist className='icon'/>,
      value:public_gists,
      label:'gists',
      color:'yellow'
    }
  ]

  return (<section className='section'>
  <Wrapper className='section-center'>
    {
      items.map((item)=>{
        const {id, label, icon, color, value} = item
          return <article className='item' key={id}>
                 <span className={color}>{icon}</span>
                 <div>
                   <h3>{value}</h3>
                   <p>{label}</p>
                 </div>
          </article>
      })
    }
    </Wrapper>
  </section>);
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
    .kay {
      background: #b3c9d5;
      color: 'red';
    }
  }
`;

export default UserInfo;
