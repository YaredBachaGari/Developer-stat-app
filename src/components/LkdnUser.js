import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import LkdnCard from './LkdnCard'

const User = () => {
  return <section className='section'>
              <Wrapper className='section-center'>
                 <LkdnCard />
              </Wrapper>
         </section>;
};

const Wrapper = styled.div`
  padding-top: 3rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export default User;