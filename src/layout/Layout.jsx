import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import "@fontsource/poppins" // Defaults to weight 400.
import Header from './Header';
import Footer from './Footer';
import NavButtons from './NavButtons';

import '../../assets/prism-theme.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/style.css';
import AudioButton from './AudioButton';


const GlobalStyle = createGlobalStyle`
 body {
   font-family: Poppins;
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

const Layout = ({ children, pageTitle, site }) => {
  let title = site.siteMetadata.title;
  if (pageTitle) {
    title = `${title} - ${pageTitle}`;
  };

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  // displaying modal only during the user's first visit to site
  useEffect(() => {
    let modalViewed = Number(localStorage.getItem('modalViewed')) || 0;
    if (modalViewed === 0) {
      toggleModal();
      localStorage.setItem('modalViewed', 1);
    }
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Helmet title={title}>
            <html lang="en" />
          </Helmet>
          <GlobalStyle />
          <Header></Header>
          <AudioButton showModal={showModal} toggleModal={toggleModal} />
          <Col xl={12} md={12} sm={12} >
            {children}
            <NavButtons />
          </Col>
          <Footer></Footer>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
