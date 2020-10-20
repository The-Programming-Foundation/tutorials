import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
`;

export default ({ children, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <SectionContainer>{children}</SectionContainer>
    </>
  );
}
