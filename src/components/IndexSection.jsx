import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  max-width: 1400px;

  .slick-prev, .slick-next{
    color: black;
    width: 50px;
    height: 50px;
  }

  .slick-prev{
    margin-left: -15px;
  }

  .slick-next{
    margin-right: -15px;
  }
`;

export default ({ children, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <SectionContainer>
         {children}
      </SectionContainer>
    </>
  );
}
