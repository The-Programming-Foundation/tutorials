import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';
import '../../assets/prism-theme.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial;
    line-height: 1.8;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 500;
    margin: 2rem 0;
  }

  h1 {
    font-size: 4rem;
    line-height: 1.4em;
  }

  h2 {
    font-size: 3rem;
    line-height: 1.3em;
  }

  h3 {
    font-size: 2rem;
    line-height: 1.3em;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

  const ContentContainer = styled.div`
  padding: 15px;
  margin: 50px 0;
  width: 100%;
  max-width: 1200px;
`;

export default ({ children, pageTitle, site }) => {
  let title = site.siteMetadata.title;
  if (pageTitle) {
    title = `${title} - ${pageTitle}`;
  }

  return (
    <LayoutContainer>
      <Helmet title={title}>
        <html lang="en" />
      </Helmet>
    <GlobalStyle />
    <Header></Header>
    <ContentContainer>{children}</ContentContainer>
    <Footer></Footer>
    </LayoutContainer>
  );
};
