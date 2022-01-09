import React from 'react';
import Layout from '../layout/Layout';
import IndexSection from '../components/IndexSection';
import IndexItemList from '../components/IndexItemList';
import LessonTopic from '../data/LessonTopic';
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from 'gatsby';

const filter = (lesson) => {
  return LessonTopic.filter(type => type.lessonType === lesson)
}
const index = ({ data: { site, mdx } }) => {
  return (
    <Layout site={site} pageTitle="Learn">
      <Container>
        <Row>
          <Col xl={1} md={1}></Col>
          <Col xl={10} md={10} sm={12} >
            <IndexSection title="Operating system(s) and Component(s)">
              <IndexItemList lessonTopic={filter('operatingsystem')} />
            </IndexSection>
            <IndexSection title="Programming languages">
              <IndexItemList lessonTopic={filter('programming')} />
            </IndexSection>
            <IndexSection title="Domain-specific language(s)">
              <IndexItemList lessonTopic={filter('domain_languages')} />
            </IndexSection>
            <IndexSection title="Logic">
              <IndexItemList lessonTopic={filter('logic')} />
            </IndexSection>
            <IndexSection title="Introduction Series">
              <IndexItemList lessonTopic={filter('getting_started')} />
            </IndexSection>
          </Col>
          <Col xl={1} md={1}>
          </Col>
        </Row>
      </Container>
    </Layout>

  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default index;
