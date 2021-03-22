import React from 'react';
import IframV86 from './IframeV86';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import '../../assets/prism-theme.css';
import  '../style/style.css';

export default ({children, title}) => {
  return (
    <>
     <Container fluid className="bg-dark">
       <Row xs={1} md={2} className="codeLabLayoutRow">
        <Col>
          {children}
        </Col>
        <Col>
          <IframV86 title={title}></IframV86>
        </Col>  
       </Row>
      </Container>
    </>
  );
};