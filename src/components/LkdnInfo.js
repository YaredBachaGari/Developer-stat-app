import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist,GoCalendar } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { FaGraduationCap,FaCertificate } from 'react-icons/fa';
import { GrOrganization, } from 'react-icons/gr';
import { GiTeamIdea } from 'react-icons/gi';




const UserInfo = () => {
  const {lnkdnUser} = React.useContext(GithubContext)
 const [searchedUser] = lnkdnUser
 const {Connections,Work_History,education, certificates,publications,HardSkill, SoftSkill } = searchedUser
   console.log(Connections)
  const no_company = Work_History.length;
  const degrees = education.length;
  const cert = certificates.length;
  const publication = publications.length;
  const hardsk = HardSkill.length
  const softsk = SoftSkill.length
  
  const LkdItems = [
    {
      id:1,
      icon:<FiUsers className='icon'/>,
      value:Connections,
      label:'Connections',
      color:'pink'
    },
    {
      id:2,
      icon:<GrOrganization className='icon'/>,
      value:no_company,
      label:'Companies',
      color:'kay'
    },
    {
      id:3,
      icon:<GoCalendar className='icon'/>,
      value:9,
      label:'Experiance',
      color:'kay'
    },
    {
      id:4,
      icon:<FaGraduationCap className='icon'/>,
      value:degrees,
      label:'degrees',
      color:'green'
    },
    {
      id:5,
      icon:<FaCertificate className='icon'/>,
      value:cert,
      label:'certificates',
      color:'purple'
    },
    {
      id:6,
      icon:<GoRepo className='icon'/>,
      value:publication,
      label:'publications',
      color:'yellow'
    },
    {
      id:7,
      icon:<GiTeamIdea className='icon'/>,
      value:hardsk,
      label:'Hard Skills',
      color:'yellow'
    },
    {
      id:8,
      icon:<GiTeamIdea className='icon'/>,
      value:softsk,
      label:'Soft skills',
      color:'yellow'
    }
  ]

  return (<section className='section'>

  <Wrapper className='section-center' style={{border:'1px solid white', borderRadius:'2rem', padding: '1rem 0.5rem'}}>
 
    {
        LkdItems.map((item)=>{
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