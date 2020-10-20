import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const FooterContainer = styled.div`
  display: flex;
  padding: 25px;
  width: 100%;
  background: black;
  color: white;
  margin: -8px;
  flex-wrap: wrap;
  line-height: 1.5;
  justify-content: space-between;
`;

const ExcerptContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
  max-width: 600px;
`;

const ExcerptTagline = styled.div`
  font-weight: 500;
  font-size: 2rem;
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
  padding: 20px;
  box-sizing: border-box;
`;

const NavigationSubContainer = styled.div`
  width: 180px;
`;

const NavigationHeader = styled.div`
  font-weight: bold;
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;

  a {
    color: white;
  }
`;

const CopyrightContainer = styled.div`
  width: 100%;
`;

export default () => {
  return (
    <FooterContainer>
      <ExcerptContainer>
        <ExcerptTagline>Help us build a smarter us</ExcerptTagline>
        <p>The Programming Foundation commits to spreading awareness and education on computer programming and operating systems so that everyone is involved, and no one is left behind while the world advances.</p>
        <p>We are a registered 501(c)(3) nonprofit organization.</p>
        <ExcerptDonateButton>Donate</ExcerptDonateButton>
      </ExcerptContainer>
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
      <CopyrightContainer>
        <hr />
        <p>© 2020 The Programming Foundation</p>
      </CopyrightContainer>
    </FooterContainer>
  );
};
