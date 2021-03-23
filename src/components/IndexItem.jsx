import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ItemContainer = styled.div`
  margin: 15px;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: black;
  }
`;

const ItemThumbnail = styled.img`
  height: 200px;
  width: 100%;
`;

const ItemTitle = styled.div`
  font-weight: bold;
`;

const ItemSubTitle = styled.div`
  font-size: 0.8rem;
`;

export default ({ to, title, subtitle, img }) => {
  return (
    <React.Fragment>
    <ItemContainer>
      <Link to={to}>
        <ItemThumbnail src={img} alt={title} />
        <ItemTitle>{title}</ItemTitle>
        <ItemSubTitle>{subtitle}</ItemSubTitle>
      </Link>
    </ItemContainer>
    </React.Fragment>
  );
}
