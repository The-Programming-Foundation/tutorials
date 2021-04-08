import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import "@fontsource/poppins" // Defaults to weight 400.
import Header from './Header';
import Footer from './Footer';
import '../../assets/prism-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Player from '../components/Player';
import '../style/style.css'

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

export default ({ children, pageTitle, site }) => {
  let title = site.siteMetadata.title;
  if (pageTitle) {
    title = `${title} - ${pageTitle}`;
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Helmet title={title}>
            <html lang="en" />
          </Helmet>
          <GlobalStyle />
          <Header></Header>
          <Col xl={2} md={1}>
          </Col>
          <Col xl={8} md={10} sm={12} >
            <Row className="row_player">
                <Col xl md={{ span: 11, offset: 11 }}>
                  <Player />
                </Col>
            </Row>
            <Row>
              <Col>
                {children}
              </Col>
            </Row>
          </Col>
          <Col xl={2} md={1}>
          </Col>
          <Footer></Footer>
        </Row>
      </Container>
    </>
  );
};
