import React from 'react';
import IframV86 from './IframeV86';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/prism-theme.css';
import '../style/style.css';

export default ({ children, title }) => {
  return (
    <>
      <Container fluid className="codeLabLayout-container">
        <Row className="codeLabLayout-row">
          <Col className="codeLabLayout-row-col-scroll">{children}
          </Col>
          <Col className="codeLabLayout-iframe"><IframV86 title={title}></IframV86>
          </Col>
        </Row>
      </Container>
    </>
  );
};