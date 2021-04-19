import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import useSound from 'use-sound';
import bootup from '../music/bootup.mp3';

import "@fontsource/poppins" // Defaults to weight 400.
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';
import NavButtons from './NavButtons';


import '../../assets/prism-theme.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/style.css';


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

  const [play, { stop, isPlaying }] = useSound(bootup);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
    if (isPlaying) {
      stop();
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Helmet title={title}>
            <html lang="en" />
          </Helmet>
          <GlobalStyle />
          <Header></Header>
          <Modal
            play={play} stop={stop} isPlaying={isPlaying}
            onToggle={toggleModal} showModal={showModal} />
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
