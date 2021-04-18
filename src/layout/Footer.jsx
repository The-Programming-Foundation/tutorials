import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/style.css'

const ExcerptContainer = styled.div`
  padding: 1.4rem;
  box-sizing: border-box;
  max-width: 600px;
  display: inline-block;
  .p{
    font-size: 1rem;
  }
`;

const ExcerptTagline = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  padding: 1.8rem 0 1.8rem 0;
`;

const ExcerptDonateButton = styled.button`
  padding: 18px 26px;
  background: white;
  border: none;
  margin: 15px 0;

  a {
    color: black;
    text-decoration: none;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  box-sizing: border-box;
`;

const NavigationSubContainer = styled.div`
  width: 160px;
  padding: 1.4rem;
`;

const NavigationHeader = styled.div`
  font-weight: bold;
  padding: 0 0 1.5rem 0;
  
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;

  a {
    color: white;
  }
`;

const Footer = () => {
  var year = new Date().getFullYear();
  return (

    <Container fluid className="bg-dark">
      <Row style={{ color: "white", background: "black" }}>
        <Col xl={2} md={1} sm={1}></Col>
        <Col xl={4} md={4} sm={11}>
          <ExcerptContainer >
            <ExcerptTagline>Help us build a smarter us</ExcerptTagline>
            <p>The Programming Foundation commits to spreading awareness and education on computer programming and operating systems so that everyone is involved, and no one is left behind while the world advances.</p>
            <p>We are a registered 501(c)(3) nonprofit organization.</p>
            <ExcerptDonateButton><a href="https://www.theprogrammingfoundation.org/donate">Donate</a></ExcerptDonateButton>
          </ExcerptContainer>
        </Col>
        <Col xl={3} md={{ span: 3, offset: 0 }} sm={{ span: 6, offset: 1 }}>
          <NavigationContainer>
            <NavigationSubContainer>
              <NavigationHeader>Learn</NavigationHeader>
              <NavigationList>
                <li><Link to="/lessons/os/unix">Unix</Link></li>
                <li><Link to="/lessons/programming/c">C</Link></li>
                <li><Link to="/lessons/programming/python">Python</Link></li>
              </NavigationList>
            </NavigationSubContainer>
            <NavigationSubContainer>
              <NavigationHeader>About</NavigationHeader>
              <NavigationList>
                <li><a href="https://www.theprogrammingfoundation.org/leadership">Leadership</a></li>
                <li><a href="https://www.theprogrammingfoundation.org/blog">Blog</a></li>
                <li><a href="https://www.theprogrammingfoundation.org/brand">Brand</a></li>
                <li><a href="https://www.theprogrammingfoundation.org/privacy">Privacy</a></li>
                <li><a href="mailto:echo@smarterus.org">Contact</a></li>
              </NavigationList>
            </NavigationSubContainer>
            <NavigationSubContainer>
              <NavigationHeader>Get Involved</NavigationHeader>
              <NavigationList>
                <li><a href="https://www.theprogrammingfoundation.org/volunteering">Volunteering</a></li>
                <li><a href="https://github.com/The-Programming-Foundation">Open source</a></li>
                <li><a href="https://www.theprogrammingfoundation.org/research">Research</a></li>
                <li><a href="https://www.theprogrammingfoundation.org/podcast">Podcast</a></li>
                <li><a href="https://www.google.com/url?q=https%3A%2F%2Fus17.campaign-archive.com%2Fhome%2F%3Fid%3D8ed970028d%26u%3D2b5505306c208a54f7daff686&sa=D&sntz=1&usg=AFQjCNH-dX29FbTo6sSuJDu4RBJUAornCQ">Newsletter</a></li>
              </NavigationList>
            </NavigationSubContainer>
          </NavigationContainer>
        </Col>
        <Col xl={2} md={3} sm={5}>
        </Col>
      </Row>
      <Row style={{ color: "white", background: "black" }}>
        <Col xl={2} md={1} sm={1}>
        </Col>
        <Col md sm xs><p>© {year} The Programming Foundation</p></Col>
        <Col xl={1} md={5}>
        </Col>
      </Row>
    </Container >
  );
};

export default Footer;
