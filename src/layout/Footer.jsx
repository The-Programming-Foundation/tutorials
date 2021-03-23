import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import  '../style/style.css'

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

export default () => {
  var year = new Date().getFullYear(); 
  return (

    <Container fluid className="bg-dark">
      <Row style={{ color:"white", background:"black"}}>
        <Col  md sm lg={1}></Col>
        <Col  md={6} sm={12}>
            <ExcerptContainer >
              <ExcerptTagline>Help us build a smarter us</ExcerptTagline>
              <p>The Programming Foundation commits to spreading awareness and education on computer programming and operating systems so that everyone is involved, and no one is left behind while the world advances.</p>
              <p>We are a registered 501(c)(3) nonprofit organization.</p>
              <ExcerptDonateButton>Donate</ExcerptDonateButton>
            </ExcerptContainer>
       </Col>
        <Col md sm lg={1}></Col>
        <Col md="auto">
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
            <li><a href="https://www.theprogrammingfoundation.org/supporters">Supporters</a></li>
            <li><a href="https://www.theprogrammingfoundation.org/privacy">Privacy Policy</a></li>
            <li><a href="echo@smarterus.org">Contact</a></li>
          </NavigationList>
        </NavigationSubContainer>
        <NavigationSubContainer>
          <NavigationHeader>Get Involved</NavigationHeader>
          <NavigationList>
            <li><a href="https://www.theprogrammingfoundation.org/volunteers">Volunteering</a></li>
            <li><a href="https://github.com/The-Programming-Foundation">Open source</a></li>
          </NavigationList>
        </NavigationSubContainer>
      </NavigationContainer>
        </Col>
        <Col xs md lg={1}>
        </Col>
      </Row>
      <Row style={{ color:"white", background:"black"}}>
        <Col xs md lg={1}>
        </Col>
        <Col md="auto"><p>© {year} The Programming Foundation</p></Col>
        <Col xs md lg={1}>
       </Col>
     </Row>
  </Container>
  );
};
